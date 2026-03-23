export class HarmoniumSynth {
  constructor() {
    this.ctx = null;
    this.oscillators = new Map();
    this.droneOscillators = [];
    this.isDronePlaying = false;
    this.initialized = false;
    this.masterGain = null;
  }

  async init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      try {
        await this.ctx.resume();
        this.initialized = true;
      } catch (err) {
        console.error("Audio resume failed", err);
      }
    } else {
      this.initialized = true;
    }
  }

  setVolume(vol) {
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(vol, this.ctx.currentTime);
    }
  }

  createReed(freq, type = 'sawtooth', detune = 0, gain = 0.5) {
    if (!this.ctx) return null;
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.detune.value = detune;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2500;
    
    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);
    
    gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(gain, this.ctx.currentTime + 0.05);

    osc.start();
    return { osc, gainNode };
  }

  playNote(noteKey, baseFreq, settings) {
    this.init();
    if (!this.initialized || this.ctx.state === 'suspended') return;
    if (this.oscillators.has(noteKey)) return;

    const freq = baseFreq * Math.pow(2, settings.transpose / 12);
    this.setVolume(settings.volume);

    const nodes = {};
    if (settings.male) {
      nodes.male = this.createReed(freq, 'sawtooth', 0, 0.4);
      nodes.maleSecondary = this.createReed(freq, 'sawtooth', 5, 0.1); 
    }
    if (settings.bass) {
      nodes.bass = this.createReed(freq / 2, 'sawtooth', -5, 0.3);
    }
    this.oscillators.set(noteKey, nodes);
  }

  stopNote(noteKey) {
    if (!this.oscillators.has(noteKey)) return;
    const nodes = this.oscillators.get(noteKey);
    const releaseTime = 0.2;
    
    Object.values(nodes).forEach(node => {
      if (!node) return;
      try {
        node.gainNode.gain.cancelScheduledValues(this.ctx.currentTime);
        node.gainNode.gain.setValueAtTime(node.gainNode.gain.value, this.ctx.currentTime);
        node.gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + releaseTime);
        node.osc.stop(this.ctx.currentTime + releaseTime);
      } catch (e) {}
    });
    this.oscillators.delete(noteKey);
  }

  toggleDrone(enable, volume) {
    this.init();
    if (!this.ctx) return;
    if (enable && !this.isDronePlaying) {
      const saFreq = 130.81;
      const paFreq = 196.00;
      this.droneOscillators = [
        this.createReed(saFreq / 2, 'sawtooth', 0, 0.15),
        this.createReed(paFreq / 2, 'sawtooth', 0, 0.1)
      ].filter(Boolean);
      this.isDronePlaying = true;
    } else if (!enable && this.isDronePlaying) {
      this.droneOscillators.forEach(node => {
        try {
          node.gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
          node.osc.stop(this.ctx.currentTime + 0.5);
        } catch (e) {}
      });
      this.droneOscillators = [];
      this.isDronePlaying = false;
    }
  }
}
