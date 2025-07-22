public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "Table", "Furniture")
        };

        // Linear Search
        int linearResult = SearchUtility.linearSearch(products, "Phone");
        System.out.println("Linear Search: " + 
            (linearResult != -1 ? "Found → " + products[linearResult] : "Not found"));

        // Sort and Binary Search
        SearchUtility.sortByName(products);
        int binaryResult = SearchUtility.binarySearch(products, "Phone");
        System.out.println("Binary Search: " + 
            (binaryResult != -1 ? "Found → " + products[binaryResult] : "Not found"));
    }
}