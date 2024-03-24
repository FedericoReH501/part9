import diagnosesData from "../data/diagnoses";

import { Diagnosis } from "../types/Diagnoses";

const getDiagnoses = (): Diagnosis[] => {
  return diagnosesData;
};

export default { getDiagnoses };
