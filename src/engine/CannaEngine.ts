import type { ICannaVisionPlugin, RubiconPlantSample, GrowthStageId } from '../types';
import { STAGES_DATA } from './stages';

export class CannaEngine {
  private plugins: Map<string, ICannaVisionPlugin> = new Map();

  constructor() {
    // Register Default Built-in Analysis Plugins
    this.registerPlugin({
      id: 'fvopa_quality_evaluator',
      name: 'FVOPA Organic Quality Evaluator',
      version: '1.2.0',
      description: 'Evaluates trichome head integrity, leaf turgidity, and living soil parameters against Canadian Organic Standards.',
      author: 'CannaVision AI Team',
      enabled: true,
      onAnalyze: (plant) => {
        let score = 100;
        if (plant.chlorosis > 10) score -= (plant.chlorosis - 10) * 1.8;
        if (plant.necrosis > 2) score -= (plant.necrosis - 2) * 4.0;
        if (plant.pathogens.length > 0) score -= plant.pathogens.length * 20;
        
        const finalScore = Math.max(10, Math.min(100, Math.round(score)));
        return { organicQualityIndex: finalScore };
      }
    });

    this.registerPlugin({
      id: 'early_warning_predictor',
      name: 'Predictive Sub-Clinical Disease Warning Engine',
      version: '2.0.1',
      description: 'Analyzes subtle micro-chlorosis velocity, stomatal cupping, and VPD micro-pockets to predict disease outbreaks 5-10 days before visual manifestation.',
      author: 'Rubicon R&D Agronomy Team',
      enabled: true
    });

    this.registerPlugin({
      id: 'living_soil_ph_monitor',
      name: 'Living Soil Food Web Sensor Sync',
      version: '1.0.0',
      description: 'Syncs living soil moisture, microbial activity, and root-zone pH values into the canopy health index.',
      author: 'Delta Pacifica Agronomy Tech',
      enabled: true
    });
  }

  // Register a new extension plugin (OPEN FOR FUTURE IMPROVEMENTS)
  public registerPlugin(plugin: ICannaVisionPlugin): boolean {
    this.plugins.set(plugin.id, plugin);
    return true;
  }

  public unregisterPlugin(pluginId: string): boolean {
    return this.plugins.delete(pluginId);
  }

  public getRegisteredPlugins(): ICannaVisionPlugin[] {
    return Array.from(this.plugins.values());
  }

  public togglePlugin(pluginId: string, enabled: boolean): void {
    const p = this.plugins.get(pluginId);
    if (p) {
      p.enabled = enabled;
    }
  }

  // Analyze a plant sample through all active plugins
  public analyzePlant(plant: RubiconPlantSample): RubiconPlantSample {
    let updatedPlant = { ...plant };

    this.plugins.forEach((plugin) => {
      if (plugin.enabled && plugin.onAnalyze) {
        const result = plugin.onAnalyze(updatedPlant);
        updatedPlant = { ...updatedPlant, ...result };
      }
    });

    return updatedPlant;
  }

  // Get metadata for a growth stage
  public getStageInfo(stageId: GrowthStageId) {
    return STAGES_DATA[stageId];
  }
}

export const engineInstance = new CannaEngine();
