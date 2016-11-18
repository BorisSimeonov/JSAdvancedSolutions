function crewModifier(workerObj) {
    if (workerObj.handsShaking) {
        workerObj.bloodAlcoholLevel +=
            0.1 * workerObj.weight * workerObj.experience;
        workerObj.handsShaking = false;
    }

    return workerObj;
}
