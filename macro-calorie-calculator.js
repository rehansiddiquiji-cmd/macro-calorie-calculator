// Daily Calorie and Macro Target Calculator
function calculateDailyMacros(weightKg, heightCm, age, activityFactor) {
    // Mifflin-St Jeor Equation for BMR (Base Metabolic Rate)
    let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    let totalCalories = Math.round(bmr * activityFactor);
    
    return {
        maintenanceCalories: totalCalories,
        targetProteinGrams: Math.round(weightKg * 2.0), // High protein for fitness
        targetWaterMl: 3500
    };
}

console.log(calculateDailyMacros(70, 175, 20, 1.55));