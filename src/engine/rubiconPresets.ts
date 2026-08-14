import type { RubiconPlantSample } from '../types';

export const RUBICON_PRESETS: RubiconPlantSample[] = [
  {
    id: 'sb_lime_mikjane_late',
    strainName: "BC Organic Lime Mi'kjane",
    brand: 'Simply Bare Organic',
    batchId: 'SBO-LM-2026-0814',
    stageId: 'late_flower',
    estimatedAgeDays: 56, // Day 56 of flower
    healthStatus: 'OPTIMAL',
    organicQualityIndex: 96,
    trichomeMaturity: {
      clearPercent: 8,
      cloudyPercent: 78,
      amberPercent: 14
    },
    terpeneScore: 95,
    chlorosis: 8.5, // natural organic autumn senescence
    necrosis: 0.5,
    leafTurgidity: 88,
    pathogens: [],
    predictiveWarnings: [
      {
        id: 'pred_harvest_window',
        title: 'Optimal Harvest Window Entry',
        timeframeDays: 3,
        subClinicalSymptom: 'Trichome amber conversion rate at +2.1%/day; terpenes peak at day 58',
        predictedRisk: 'Degradation of delicate monoterpenes if harvested past day 61',
        probability: 94,
        preventativeAction: 'Schedule FVOPA certified hand-harvest for Day 58 morning shift.'
      }
    ],
    livingSoilParams: {
      soilMoisturePercent: 42,
      soilTempC: 20.5,
      microbialActivityScore: 94,
      phLevel: 6.5
    },
    description: 'Premier certified organic canopy. Pristine glandular trichome heads with intense lime-citrus terpene profile. Natural organic living soil flush complete.',
    fvopaComplianceStatus: 'CERTIFIED COMPLIANT'
  },
  {
    id: 'comatose_mid_warning',
    strainName: 'Organic Comatose',
    brand: '1964 Supply Co.',
    batchId: '1964-COM-2026-0412',
    stageId: 'mid_flower',
    estimatedAgeDays: 34, // Day 34 of flower
    healthStatus: 'WARNING',
    organicQualityIndex: 78,
    trichomeMaturity: {
      clearPercent: 45,
      cloudyPercent: 52,
      amberPercent: 3
    },
    terpeneScore: 82,
    chlorosis: 14.2,
    necrosis: 2.8,
    leafTurgidity: 68,
    pathogens: [
      {
        id: 'det_micro_chlorosis',
        label: 'Living Soil K Deficit / Interveinal Chlorosis',
        category: 'deficiency',
        confidence: 0.89,
        bbox: { x: 30, y: 45, w: 25, h: 22 },
        severity: 'medium',
        organicIPM: 'Apply kelp meal extract + compost tea soil drench (FVOPA Approved).'
      }
    ],
    predictiveWarnings: [
      {
        id: 'pred_k_lockout',
        title: 'Impending Living Soil Potassium Lockout',
        timeframeDays: 6,
        subClinicalSymptom: 'Subtle leaf margin curling (+3.2% per 24h) and soil pH drop to 5.9',
        predictedRisk: 'Bud swell stagnation & reduced flower density if soil microbial pH is uncorrected',
        probability: 88,
        preventativeAction: 'Top-dress with organic calcific limestone & raise Living Soil moisture by +5%.'
      },
      {
        id: 'pred_rh_spike',
        title: 'Micro-Climate Botrytis Risk in Room #4',
        timeframeDays: 8,
        subClinicalSymptom: 'Canopy transpiration density spike causing localized RH micro-pocket of 68%',
        predictedRisk: 'Internal cola Bud Rot (Botrytis cinerea) spore germination',
        probability: 76,
        preventativeAction: 'Increase lower canopy under-bench air circulation fan speeds by +15%.'
      }
    ],
    livingSoilParams: {
      soilMoisturePercent: 35,
      soilTempC: 22.1,
      microbialActivityScore: 78,
      phLevel: 5.9
    },
    description: 'Heavy indica canopy showing early signs of living soil nutrient lockout due to root zone pH drift. Micro-climate humidity control required.',
    fvopaComplianceStatus: 'ACTION REQUIRED'
  },
  {
    id: 'wildflower_pm_critical',
    strainName: 'Organic CBD Therapy',
    brand: 'Wildflower',
    batchId: 'WF-CBD-2026-0901',
    stageId: 'late_veg',
    estimatedAgeDays: 38,
    healthStatus: 'CRITICAL',
    organicQualityIndex: 52,
    trichomeMaturity: {
      clearPercent: 95,
      cloudyPercent: 5,
      amberPercent: 0
    },
    terpeneScore: 60,
    chlorosis: 18.5,
    necrosis: 6.2,
    leafTurgidity: 55,
    pathogens: [
      {
        id: 'det_pm_1',
        label: 'Powdery Mildew (Golovinomyces cichoracearum)',
        category: 'fungal',
        confidence: 0.96,
        bbox: { x: 40, y: 28, w: 22, h: 20 },
        severity: 'critical',
        organicIPM: 'Spray FVOPA-compliant Potassium Bicarbonate (MilStop) / Regalia Biofungicide.'
      },
      {
        id: 'det_pm_2',
        label: 'Powdery Mildew Spore Colony',
        category: 'fungal',
        confidence: 0.94,
        bbox: { x: 65, y: 42, w: 18, h: 18 },
        severity: 'critical',
        organicIPM: 'Prune affected fan leaves into sealed biohazard bag. Reduce room RH to 45%.'
      }
    ],
    predictiveWarnings: [
      {
        id: 'pred_spore_spread',
        title: 'High Risk Spore Cross-Contamination',
        timeframeDays: 4,
        subClinicalSymptom: 'Airflow velocity over infected bench exceeds 0.8 m/s',
        predictedRisk: 'Spore travel to adjacent organic benches (Rows 12-14)',
        probability: 92,
        preventativeAction: 'Isolate row with temporary HEPA curtain & apply organic bio-fungicide.'
      }
    ],
    livingSoilParams: {
      soilMoisturePercent: 50,
      soilTempC: 24.0,
      microbialActivityScore: 82,
      phLevel: 6.4
    },
    description: 'Fungal outbreak detected on fan leaf upper surfaces. Immediate organic bio-fungicide application required under FVOPA protocol.',
    fvopaComplianceStatus: 'ISOLATION REQUIRED'
  },
  {
    id: 'blue_dream_hplvd_crit',
    strainName: 'BC Organic Blue Dream',
    brand: 'Simply Bare Organic',
    batchId: 'SBO-BD-2026-0319',
    stageId: 'early_flower',
    estimatedAgeDays: 16, // Day 16 of flower
    healthStatus: 'CRITICAL',
    organicQualityIndex: 45,
    trichomeMaturity: {
      clearPercent: 88,
      cloudyPercent: 12,
      amberPercent: 0
    },
    terpeneScore: 40,
    chlorosis: 22.0,
    necrosis: 8.4,
    leafTurgidity: 42,
    pathogens: [
      {
        id: 'det_hplvd',
        label: 'Hop Latent Viroid (HpLVd - Dudding Symptoms)',
        category: 'viroid',
        confidence: 0.93,
        bbox: { x: 20, y: 35, w: 35, h: 30 },
        severity: 'critical',
        organicIPM: 'CRITICAL VIROID: Cull plant immediately. Sanitize cutting tools with 10% bleach.'
      },
      {
        id: 'det_spider_mites',
        label: 'Two-Spotted Spider Mites (Tetranychus urticae)',
        category: 'pest',
        confidence: 0.91,
        bbox: { x: 55, y: 20, w: 20, h: 22 },
        severity: 'critical',
        organicIPM: 'Release predatory mites (Phytoseiulus persimilis @ 50 per sq ft).'
      }
    ],
    predictiveWarnings: [
      {
        id: 'pred_terpene_crash',
        title: 'HpLVd Terpene & Cannabinoid Crash (50%+ Loss)',
        timeframeDays: 5,
        subClinicalSymptom: 'Horizontal leaf drooping, brittle stems, and trichome density reduction',
        predictedRisk: 'Complete crop commercial devaluation for premium flower release',
        probability: 98,
        preventativeAction: 'Cull infected clone stock & run RT-PCR testing on adjacent mother plants.'
      }
    ],
    livingSoilParams: {
      soilMoisturePercent: 28,
      soilTempC: 25.2,
      microbialActivityScore: 65,
      phLevel: 6.2
    },
    description: 'Severe viroid dudding symptoms combined with spider mite stippling. Must be culled to preserve living soil room integrity.',
    fvopaComplianceStatus: 'ISOLATION REQUIRED'
  },
  {
    id: 'homestead_early_veg',
    strainName: 'Homestead Organic Hybrid #409',
    brand: 'Homestead Cannabis Supply',
    batchId: 'HCS-HYB-2026-0711',
    stageId: 'early_veg',
    estimatedAgeDays: 22,
    healthStatus: 'OPTIMAL',
    organicQualityIndex: 94,
    trichomeMaturity: {
      clearPercent: 100,
      cloudyPercent: 0,
      amberPercent: 0
    },
    terpeneScore: 90,
    chlorosis: 1.0,
    necrosis: 0.0,
    leafTurgidity: 95,
    pathogens: [],
    predictiveWarnings: [
      {
        id: 'pred_topping_window',
        title: 'First Topping & LST Window Opening',
        timeframeDays: 2,
        subClinicalSymptom: '5th node fully developed; apical dominance active',
        predictedRisk: 'Uneven canopy height if topping is delayed past node 6',
        probability: 85,
        preventativeAction: 'Perform 5th node apical topping and install trellis net.'
      }
    ],
    livingSoilParams: {
      soilMoisturePercent: 48,
      soilTempC: 23.5,
      microbialActivityScore: 96,
      phLevel: 6.6
    },
    description: 'Vigorous early vegetative growth in living soil. Vibrant apical tips, excellent soil food web fungal-to-bacterial ratio.',
    fvopaComplianceStatus: 'CERTIFIED COMPLIANT'
  },
  {
    id: 'cold_cure_batch108',
    strainName: "BC Organic Lime Mi'kjane Cured",
    brand: 'Simply Bare Organic',
    batchId: 'SBO-CC-2026-0108',
    stageId: 'cold_cure',
    estimatedAgeDays: 70, // 56 days flower + 14 days cure
    healthStatus: 'OPTIMAL',
    organicQualityIndex: 98,
    trichomeMaturity: {
      clearPercent: 5,
      cloudyPercent: 80,
      amberPercent: 15
    },
    terpeneScore: 98,
    chlorosis: 0.0,
    necrosis: 0.0,
    leafTurgidity: 70, // dry cured turgidity
    pathogens: [],
    predictiveWarnings: [
      {
        id: 'pred_jarring_ready',
        title: 'Packaging & Jarring Water Activity Target Reached',
        timeframeDays: 1,
        subClinicalSymptom: 'Water activity (a_w) stabilized at 0.605 across test colas',
        predictedRisk: 'Over-drying if left in cure room past day 15',
        probability: 96,
        preventativeAction: 'Proceed to nitrogen-flushed glass packaging for Simply Bare retail release.'
      }
    ],
    livingSoilParams: {
      soilMoisturePercent: 11, // cured flower moisture
      soilTempC: 15.5,
      microbialActivityScore: 0, // dry cured
      phLevel: 6.5
    },
    description: 'Cold cured flower room #3. Perfect trichome gland preservation, intense lime-fuel aroma profile, ready for premium retail distribution.',
    fvopaComplianceStatus: 'CERTIFIED COMPLIANT'
  }
];
