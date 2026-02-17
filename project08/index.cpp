#include <iostream>

int main() {
  
double pesos, reais, soles, dollars;

std:: cout << "Enter number of Colombian Pesos: ";

std::cin >> pesos;

// Pesos conversion rate: 0.00032
// Reais conversion rate: 0.27
// Soles conversion rate: 0.3
dollars = 0.00032 * pesos + 0.27 * reais + 0.3 * soles;

  std::cout << "Total USD = $" << dollars << "\n";

}
