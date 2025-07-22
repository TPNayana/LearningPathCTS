package com.example;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        // Arrange: create calculator before each test
        calculator = new Calculator();
        System.out.println("Setup complete");
    }

    @AfterEach
    void tearDown() {
        // Cleanup after each test (optional in this case)
        calculator = null;
        System.out.println("Teardown complete");
    }

    @Test
    void testAddition_AAA() {
        // Arrange done in setUp()

        // Act
        int result = calculator.add(4, 6);

        // Assert
        assertEquals(10, result);
    }

    @Test
    void testDivision_AAA() {
        // Act
        int result = calculator.divide(20, 5);

        // Assert
        assertEquals(4, result);
    }

    @Test
    void testDivideByZero_AAA() {
        // Act & Assert
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            calculator.divide(10, 0);
        });

        assertEquals("Cannot divide by zero", exception.getMessage());
    }
}
