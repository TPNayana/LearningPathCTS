public class ForecastTest {
    public static void main(String[] args) {
        double initialValue = 10000;  // ₹10,000 today
        double annualGrowthRate = 0.08; // 8% annual growth
        int forecastYears = 5;

        double futureValue = ForecastCalculator.predictFutureValue(initialValue, annualGrowthRate, forecastYears);

        System.out.printf("Predicted Value after %d years: Rs %.2f%n", forecastYears, futureValue);
    }
    public static double predictIteratively(double currentValue, double growthRate, int years) {
    for (int i = 0; i < years; i++) {
        currentValue *= (1 + growthRate);
    }
    return currentValue;
}

}
