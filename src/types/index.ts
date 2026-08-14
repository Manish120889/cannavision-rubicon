// CannaVision AI - Rubicon Organics Edition Types

export type GrowthStageId = 
  | 'clone_cutting'
  | 'early_veg'
  | 'late_veg'
  | 'early_flower'
  | 'mid_flower'
  | 'late_flower'
  | 'cold_cure';

export interface GrowthStageInfo {
  id: GrowthStageId;
  name: string;
  dayRange: string;
  photoperiod: string;
  targetVPD: string;
  targetTemp: string;
  targetRH: string;
  keyVisualIndicators: string[];
}

export type HealthStatus = 'OPTIMAL' | 'WARNING' | 'CRITICAL';

export interface PathogenDetection {
  id: string;
  label: string; // e.g., "Powdery Mildew (Golovinomyces cichoracearum)"
  category: 'fungal' | 'pest' | 'viroid' | 'deficiency' | 'environmental';
  confidence: number; // 0-1
  bbox: { x: number; y: number; w: number; h: number }; // percentage coords
  severity: 'low' | 'medium' | 'critical';
  organicIPM: string; // FVOPA compliant remediation
}

export interface EarlyWarningIndicator {
  id: string;
  title: string;
  timeframeDays: number; // predicted days until full outbreak (e.g. 5-10 days)
  subClinicalSymptom: string; // e.g. "Micro-chlorosis velocity (+2.4%/day) on upper tier 3 leaves"
  predictedRisk: string; // e.g. "Impending Living Soil Nitrogen Lockout due to pH drift"
  probability: number; // % likelihood
  preventativeAction: string; // FVOPA living soil organic adjustment
}

export interface RubiconPlantSample {
  id: string;
  strainName: string;
  brand: string; // e.g., "Simply Bare Organic" | "1964 Supply Co." | "Wildflower"
  batchId: string;
  stageId: GrowthStageId;
  estimatedAgeDays: number;
  healthStatus: HealthStatus;
  organicQualityIndex: number; // 0-100 (FVOPA Quality Scale)
  trichomeMaturity: {
    clearPercent: number;
    cloudyPercent: number;
    amberPercent: number;
  };
  terpeneScore: number; // 0-100 visual terpene gland integrity score
  chlorosis: number; // % yellowing
  necrosis: number; // % dead tissue
  leafTurgidity: number; // % water pressure / perking
  pathogens: PathogenDetection[];
  predictiveWarnings: EarlyWarningIndicator[];
  livingSoilParams: {
    soilMoisturePercent: number;
    soilTempC: number;
    microbialActivityScore: number;
    phLevel: number;
  };
  description: string;
  fvopaComplianceStatus: 'CERTIFIED COMPLIANT' | 'ACTION REQUIRED' | 'ISOLATION REQUIRED';
}

// Plugin Architecture Interface for Open Improvement
export interface ICannaVisionPlugin {
  id: string;
  name: string;
  version: string;
  description: string;
  author: string;
  enabled: boolean;
  onAnalyze?: (plant: RubiconPlantSample) => Partial<RubiconPlantSample>;
}
