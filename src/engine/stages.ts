import type { GrowthStageId, GrowthStageInfo } from '../types';

export const STAGES_DATA: Record<GrowthStageId, GrowthStageInfo> = {
  clone_cutting: {
    id: 'clone_cutting',
    name: 'Clone & Unrooted Cutting Stage',
    dayRange: 'Days 1 - 14',
    photoperiod: '18/6 Light Cycle',
    targetVPD: '0.8 - 1.0 kPa',
    targetTemp: '24°C - 26°C',
    targetRH: '75% - 85%',
    keyVisualIndicators: [
      'Callus formation at stem cut base',
      'Initial root primordia emergence (< 0.5 cm)',
      'High leaf turgidity under humidity domes',
      'Uniform clone dome node height (12-15 cm)'
    ]
  },
  early_veg: {
    id: 'early_veg',
    name: 'Early Vegetative Stage (Living Soil Rooting)',
    dayRange: 'Days 15 - 28',
    photoperiod: '18/6 Light Cycle',
    targetVPD: '1.0 - 1.2 kPa',
    targetTemp: '25°C - 27°C',
    targetRH: '65% - 70%',
    keyVisualIndicators: [
      '3-finger & 5-finger fan leaf expansion',
      'Active living soil mycorrhizal root network establishment',
      'Bright lime-emerald apex growth tips',
      'First node topping & canopy training readiness'
    ]
  },
  late_veg: {
    id: 'late_veg',
    name: 'Late Vegetative & Pre-Flower Stretch',
    dayRange: 'Days 29 - 42',
    photoperiod: '18/6 Light Cycle',
    targetVPD: '1.2 - 1.4 kPa',
    targetTemp: '24°C - 26°C',
    targetRH: '60% - 65%',
    keyVisualIndicators: [
      '7-finger & 9-finger broad fan leaves',
      'Inter-nodal spacing stretch (2 - 4 cm)',
      'Thickened main stem diameter (> 1.2 cm)',
      'Pre-flower primordia calyx emergence at node junctions'
    ]
  },
  early_flower: {
    id: 'early_flower',
    name: 'Early Flower Stage (Pistil "Buttoning")',
    dayRange: 'Days 1 - 21 of Flower',
    photoperiod: '12/12 Light Cycle',
    targetVPD: '1.2 - 1.4 kPa',
    targetTemp: '23°C - 25°C',
    targetRH: '55% - 60%',
    keyVisualIndicators: [
      'White pistil hair "buttons" stacking at terminal shoot tips',
      'Vertical canopy stretch (1.5x - 2x height gain)',
      'Capitate-sessile trichome initial formation',
      'Canopy defoliation & understory lollipoping window'
    ]
  },
  mid_flower: {
    id: 'mid_flower',
    name: 'Mid Flower Stage (Cola Swell & Resin Secretion)',
    dayRange: 'Days 22 - 42 of Flower',
    photoperiod: '12/12 Light Cycle',
    targetVPD: '1.3 - 1.5 kPa',
    targetTemp: '22°C - 24°C',
    targetRH: '50% - 55%',
    keyVisualIndicators: [
      'Dense calyx stacking & cola expansion',
      'Capitate-stalked trichome heads glistening',
      'Initial terpene aroma intensity surge (myrcene, caryophyllene, limonene)',
      'Early pistil tip browning (< 15% orange)'
    ]
  },
  late_flower: {
    id: 'late_flower',
    name: 'Late Flower & Harvest Ripening Window',
    dayRange: 'Days 43 - 65+ of Flower',
    photoperiod: '12/12 Light Cycle',
    targetVPD: '1.4 - 1.6 kPa',
    targetTemp: '20°C - 22°C',
    targetRH: '40% - 45%',
    keyVisualIndicators: [
      '70% - 90% pistils turned deep amber/burnt orange',
      'Trichome head clarity shift: 70% Milky/Cloudy, 15% Amber, < 15% Clear',
      'Natural organic fan leaf senescence (autumn color shift)',
      'Cal-Mag & Nitrogen organic living soil flush completion'
    ]
  },
  cold_cure: {
    id: 'cold_cure',
    name: 'Post-Harvest Organic Cold Cure & Drying',
    dayRange: 'Days 1 - 14 Post-Harvest',
    photoperiod: '0/24 (Total Darkness)',
    targetVPD: '1.1 - 1.2 kPa',
    targetTemp: '15°C - 16°C (60°F)',
    targetRH: '58% - 62%',
    keyVisualIndicators: [
      'Water activity (a_w) stabilizing at 0.58 - 0.62',
      'Stem snap test pass (clean audible snap without stringiness)',
      'Intact glandular trichome heads without thermal degradation',
      'FVOPA Organic terpene preservation profile intact'
    ]
  }
};
