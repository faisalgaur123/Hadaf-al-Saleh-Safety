import {
  Droplets, Wind, Sparkles, Waves, Cloud, BellRing, Gauge,
  FireExtinguisher, DoorClosed, ShieldCheck, Award, Users, Lightbulb,
} from "lucide-react";

export const services = [
  { icon: Droplets, titleKey: "srvWaterSprinkler" as const, descKey: "srvWaterSprinklerDesc" as const },
  { icon: Wind, titleKey: "srvCo2Suppression" as const, descKey: "srvCo2SuppressionDesc" as const },
  { icon: Sparkles, titleKey: "srvFm200" as const, descKey: "srvFm200Desc" as const },
  { icon: Waves, titleKey: "srvFoamSuppression" as const, descKey: "srvFoamSuppressionDesc" as const },
  { icon: Cloud, titleKey: "srvNovec1230" as const, descKey: "srvNovec1230Desc" as const },
  { icon: BellRing, titleKey: "srvFireAlarm" as const, descKey: "srvFireAlarmDesc" as const },
  { icon: Gauge, titleKey: "srvFirePump" as const, descKey: "srvFirePumpDesc" as const },
  { icon: FireExtinguisher, titleKey: "srvFireExtinguishers" as const, descKey: "srvFireExtinguishersDesc" as const },
  { icon: DoorClosed, titleKey: "srvFireDoors" as const, descKey: "srvFireDoorsDesc" as const },
];

export const values = [
  { icon: ShieldCheck, titleKey: "valIntegrity" as const, descKey: "valIntegrityDesc" as const },
  { icon: Award, titleKey: "valQuality" as const, descKey: "valQualityDesc" as const },
  { icon: Users, titleKey: "valCustomerCentricity" as const, descKey: "valCustomerCentricityDesc" as const },
  { icon: Lightbulb, titleKey: "valInnovation" as const, descKey: "valInnovationDesc" as const },
];