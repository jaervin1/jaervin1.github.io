//Jaervin 2025

#include <iostream>
#include <vector>
#include <chrono>
#include <fstream>
#include <string>

int partition(std::vector<float>& arr, int left, int right) {
    int middle = left + (right - left) / 2;
    int pivot;

    // Pivot is median of {left, middle, and right} most values of list.
    if ((arr[left] <= arr[middle] && arr[middle] <= arr[right]) ||
        (arr[right] <= arr[middle] && arr[middle] <= arr[left])) {
        pivot = middle;
    } else if ((arr[middle] <= arr[left] && arr[left] <= arr[right]) ||
               (arr[right] <= arr[left] && arr[left] <= arr[middle])) {
        pivot = left;
    } else {
        pivot = right;
    }

    // Swap left-most element with the pivot.
    std::swap(arr[left], arr[pivot]);

    // Since the left-most element is now the pivot, set the pivot value to it.
    float pivotValue = arr[left];

    int i = left + 1;
    int j = right;

    while (true) {
        // While going through list, every value less than pivot, increment i.
        while (i <= right && arr[i] < pivotValue) {
            i++;
        }
        // While iterating through list, every value greater than pivot, decrement j.
        while (j >= left + 1 && arr[j] > pivotValue) {
            j--;
        }

        // i is now greater than j, they have crossed or are equal.
        if (i >= j) {
            break;
        }

        // Swap elements at i and j.
        std::swap(arr[i], arr[j]);
        i++;
        j--;
    }

    // Swap pivot value to the true position.
    std::swap(arr[left], arr[j]);

    // Returns the true position of pivot.
    return j;
}

void quickSort(std::vector<float>& arr, int left, int right) {
    if (left < right) {
        int pivotIndex = partition(arr, left, right);
        // Sorts left side of partition.
        quickSort(arr, left, pivotIndex - 1);
        // Sorts right side of partition.
        quickSort(arr, pivotIndex + 1, right);
    }
}

std::vector<float> readInputFile(const std::string& filename) {
    std::vector<float> arr;
    // Reads input file from name.
    std::ifstream inputFile(filename);

    float element;
    // Adds every element of list to vector.
    while (inputFile >> element) {
        arr.push_back(element);
    }
    inputFile.close();
    return arr;
}

void writeOutputFile(const std::string& filename, const std::vector<float>& arr) {
    // Outputs sorted list in space delimited format.
    std::ofstream outputFile(filename);

    for (size_t i = 0; i < arr.size(); i++) {
        outputFile << arr[i];
        if (i < arr.size() - 1) {
            outputFile << " ";
        }
    }
    outputFile.close();
}

// Appends execution time to executionTime file.
void writeExecutionTime(const std::string& filename, int inputSize, double microseconds) {
    std::ofstream timeFile(filename, std::ios::app);  // Append to file
    timeFile << inputSize << "\t" << microseconds << std::endl;
    timeFile.close();
}

// Averages each set of execution times per size set (ie: 10, 100, 1000)
void calculateAverages() {
    std::ifstream inputFile("Ervin_John_executionTime.txt");

    // Skip header
    std::string header;
    std::getline(inputFile, header);

    double total_10 = 0.0, total_100 = 0.0, total_1000 = 0.0;
    int count_10 = 0, count_100 = 0, count_1000 = 0;

    int inputSize;
    double executionTime;

    while (inputFile >> inputSize >> executionTime) {
        if (inputSize == 10) {
            total_10 += executionTime;
            count_10++;
        } else if (inputSize == 100) {
            total_100 += executionTime;
            count_100++;
        } else if (inputSize == 1000) {
            total_1000 += executionTime;
            count_1000++;
        }
    }
    inputFile.close();

    double avg_10 = total_10 / count_10;
    double avg_100 = total_100 / count_100;
    double avg_1000 = total_1000 / count_1000;

    std::ofstream outputFile("Ervin_John_averageExecutionTime.txt");
    outputFile << "Input Size\tAverage Execution Time" << std::endl;
    outputFile << 10 << "\t" << avg_10 << std::endl;
    outputFile << 100 << "\t" << avg_100 << std::endl;
    outputFile << 1000 << "\t" << avg_1000 << std::endl;
    outputFile.close();
}

int main(int argc, char* argv[]) {
    if (argc == 2 && std::string(argv[1]) == "--average") {
        calculateAverages();
        return 0;
    }
    if (argc == 3) {
        std::string inputFilename = argv[1];
        std::string outputFilename = argv[2];

        // Reads input file into array
        std::vector<float> arr = readInputFile(inputFilename);

        int inputSize = arr.size();

        // Times runtime of quicksort for array.
        auto start = std::chrono::high_resolution_clock::now();
        quickSort(arr, 0, arr.size() - 1);
        auto end = std::chrono::high_resolution_clock::now();
        std::chrono::duration<double> duration = end - start;

        // Outputs sorted array to file.
        writeOutputFile(outputFilename, arr);
        // Appends size and execution time to execution time file.
        writeExecutionTime("Ervin_John_executionTime.txt", inputSize, duration.count());
        return 0;
    }
    return 1;
}