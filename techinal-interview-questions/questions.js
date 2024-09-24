const codingQuestions = {
    factorial: {
        question: "Write a program to calculate the factorial of a number.",
        input: "5",
        output: "Factorial: 120",
        solutions: {
            c: `
#include <stdio.h>

int factorial(int n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
}

int main() {
    int num = 5;
    printf("Factorial: %d\\n", factorial(num));
    return 0;
}
            `,
            cpp: `
#include <iostream>

int factorial(int n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
}

int main() {
    int num = 5;
    std::cout << "Factorial: " << factorial(num) << std::endl;
    return 0;
}
            `,
            java: `
public class Factorial {
    public static int factorial(int n) {
        return (n == 0) ? 1 : n * factorial(n - 1);
    }

    public static void main(String[] args) {
        int num = 5;
        System.out.println("Factorial: " + factorial(num));
    }
}
            `,
            python: `
def factorial(n):
    return 1 if n == 0 else n * factorial(n - 1)

if __name__ == "__main__":
    num = 5
    print("Factorial:", factorial(num))
            `
        }
    },
    palindrome: {
        question: "Write a program to check if a string is a palindrome.",
        input: "\"madam\"",
        output: "madam is a palindrome.",
        solutions: {
            c: `
#include <stdio.h>
#include <string.h>

int isPalindrome(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - i - 1]) return 0;
    }
    return 1;
}

int main() {
    char str[] = "madam";
    if (isPalindrome(str))
        printf("%s is a palindrome.\\n", str);
    else
        printf("%s is not a palindrome.\\n", str);
    return 0;
}
            `,
            cpp: `
#include <iostream>
#include <cstring>

bool isPalindrome(const std::string &str) {
    int len = str.length();
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - i - 1]) return false;
    }
    return true;
}

int main() {
    std::string str = "madam";
    if (isPalindrome(str))
        std::cout << str << " is a palindrome." << std::endl;
    else
        std::cout << str << " is not a palindrome." << std::endl;
    return 0;
}
            `,
            java: `
public class Palindrome {
    public static boolean isPalindrome(String str) {
        int len = str.length();
        for (int i = 0; i < len / 2; i++) {
            if (str.charAt(i) != str.charAt(len - i - 1)) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        String str = "madam";
        if (isPalindrome(str))
            System.out.println(str + " is a palindrome.");
        else
            System.out.println(str + " is not a palindrome.");
    }
}
            `,
            python: `
def is_palindrome(s):
    return s == s[::-1]

if __name__ == "__main__":
    str = "madam"
    if is_palindrome(str):
        print(str, "is a palindrome.")
    else:
        print(str, "is not a palindrome.")
            `
        }
    },
    arraySum: {
        question: "Write a program to find the sum of all elements in an array.",
        input: "[1, 2, 3, 4, 5]",
        output: "Sum: 15",
        solutions: {
            c: `
#include <stdio.h>

int sumArray(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    printf("Sum: %d\\n", sumArray(arr, size));
    return 0;
}
            `,
            cpp: `
#include <iostream>
#include <vector>

int sumArray(const std::vector<int> &arr) {
    int sum = 0;
    for (int num : arr) {
        sum += num;
    }
    return sum;
}

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5};
    std::cout << "Sum: " << sumArray(arr) << std::endl;
    return 0;
}
            `,
            java: `
public class ArraySum {
    public static int sumArray(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Sum: " + sumArray(arr));
    }
}
            `,
            python: `
def sum_array(arr):
    return sum(arr)

if __name__ == "__main__":
    arr = [1, 2, 3, 4, 5]
    print("Sum:", sum_array(arr))
            `
        }
    },
    countVowels: {
        question: "Write a program to count the number of vowels in a string.",
        input: "\"Hello World\"",
        output: "Number of vowels: 3",
        solutions: {
            c: `
#include <stdio.h>

int countVowels(char str[]) {
    int count = 0;
    for (int i = 0; str[i]; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || 
            str[i] == 'o' || str[i] == 'u' || 
            str[i] == 'A' || str[i] == 'E' || 
            str[i] == 'I' || str[i] == 'O' || 
            str[i] == 'U') {
            count++;
        }
    }
    return count;
}

int main() {
    char str[] = "Hello World";
    printf("Number of vowels: %d\\n", countVowels(str));
    return 0;
}
            `,
            cpp: `
#include <iostream>
#include <string>

int countVowels(const std::string &str) {
    int count = 0;
    for (char c : str) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
            c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
            count++;
        }
    }
    return count;
}

int main() {
    std::string str = "Hello World";
    std::cout << "Number of vowels: " << countVowels(str) << std::endl;
    return 0;
}
            `,
            java: `
public class VowelCount {
    public static int countVowels(String str) {
        int count = 0;
        for (char c : str.toCharArray()) {
            if ("AEIOUaeiou".indexOf(c) != -1) count++;
        }
        return count;
    }

    public static void main(String[] args) {
        String str = "Hello World";
        System.out.println("Number of vowels: " + countVowels(str));
    }
}
            `,
            python: `
def count_vowels(s):
    return sum(1 for char in s if char.lower() in 'aeiou')

if __name__ == "__main__":
    str = "Hello World"
    print("Number of vowels:", count_vowels(str))
            `
        }
    },
    removeDuplicates: {
        question: "Write a program to remove duplicates from an array.",
        input: "[1, 2, 2, 3, 4, 4, 5]",
        output: "[1, 2, 3, 4, 5]",
        solutions: {
            c: `
#include <stdio.h>

void removeDuplicates(int arr[], int *size) {
    for (int i = 0; i < *size; i++) {
        for (int j = i + 1; j < *size; j++) {
            if (arr[i] == arr[j]) {
                for (int k = j; k < *size - 1; k++) {
                    arr[k] = arr[k + 1];
                }
                (*size)--;
                j--;
            }
        }
    }
}

int main() {
    int arr[] = {1, 2, 2, 3, 4, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    removeDuplicates(arr, &size);
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("%d", arr[i]);
        if (i < size - 1) printf(", ");
    }
    printf("]\\n");
    return 0;
}
            `,
            cpp: `
#include <iostream>
#include <vector>
#include <algorithm>

std::vector<int> removeDuplicates(std::vector<int> &arr) {
    std::sort(arr.begin(), arr.end());
    arr.erase(std::unique(arr.begin(), arr.end()), arr.end());
    return arr;
}

int main() {
    std::vector<int> arr = {1, 2, 2, 3, 4, 4, 5};
    arr = removeDuplicates(arr);
    std::cout << "[";
    for (size_t i = 0; i < arr.size(); i++) {
        std::cout << arr[i];
        if (i < arr.size() - 1) std::cout << ", ";
    }
    std::cout << "]" << std::endl;
    return 0;
}
            `,
            java: `
import java.util.Arrays;

public class RemoveDuplicates {
    public static int[] removeDuplicates(int[] arr) {
        return Arrays.stream(arr).distinct().toArray();
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 4, 4, 5};
        arr = removeDuplicates(arr);
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
}
            `,
            python: `
def remove_duplicates(arr):
    return list(set(arr))

if __name__ == "__main__":
    arr = [1, 2, 2, 3, 4, 4, 5]
    arr = remove_duplicates(arr)
    print(arr)
            `
        }
    },

    
        reverseInteger: {
            question: "Write a program to reverse an integer.",
            input: "12345",
            output: "Reversed Integer: 54321",
            solutions: {
                c: `
    #include <stdio.h>
    
    int reverseInteger(int n) {
        int reversed = 0;
        while (n != 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        return reversed;
    }
    
    int main() {
        int num = 12345;
        printf("Reversed Integer: %d\\n", reverseInteger(num));
        return 0;
    }
                `,
                cpp: `
    #include <iostream>
    
    int reverseInteger(int n) {
        int reversed = 0;
        while (n != 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        return reversed;
    }
    
    int main() {
        int num = 12345;
        std::cout << "Reversed Integer: " << reverseInteger(num) << std::endl;
        return 0;
    }
                `,
                java: `
    public class ReverseInteger {
        public static int reverseInteger(int n) {
            int reversed = 0;
            while (n != 0) {
                reversed = reversed * 10 + n % 10;
                n /= 10;
            }
            return reversed;
        }
    
        public static void main(String[] args) {
            int num = 12345;
            System.out.println("Reversed Integer: " + reverseInteger(num));
        }
    }
                `,
                python: `
    def reverse_integer(n):
        reversed = 0
        while n != 0:
            reversed = reversed * 10 + n % 10
            n //= 10
        return reversed
    
    if __name__ == "__main__":
        num = 12345
        print("Reversed Integer:", reverse_integer(num))
                `
            }
        },
        anagramCheck: {
            question: "Write a program to check if two strings are anagrams.",
            input: "\"listen\", \"silent\"",
            output: "Anagrams: true",
            solutions: {
                c: `
    #include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    int compare(const void *a, const void *b) {
        return (*(char*)a - *(char*)b);
    }
    
    int areAnagrams(char str1[], char str2[]) {
        if (strlen(str1) != strlen(str2)) return 0;
        qsort(str1, strlen(str1), sizeof(char), compare);
        qsort(str2, strlen(str2), sizeof(char), compare);
        return strcmp(str1, str2) == 0;
    }
    
    int main() {
        char str1[] = "listen";
        char str2[] = "silent";
        if (areAnagrams(str1, str2))
            printf("Anagrams: true\\n");
        else
            printf("Anagrams: false\\n");
        return 0;
    }
                `,
                cpp: `
    #include <iostream>
    #include <algorithm>
    
    bool areAnagrams(std::string str1, std::string str2) {
        if (str1.length() != str2.length()) return false;
        std::sort(str1.begin(), str1.end());
        std::sort(str2.begin(), str2.end());
        return str1 == str2;
    }
    
    int main() {
        std::string str1 = "listen";
        std::string str2 = "silent";
        std::cout << "Anagrams: " << (areAnagrams(str1, str2) ? "true" : "false") << std::endl;
        return 0;
    }
                `,
                java: `
    import java.util.Arrays;
    
    public class AnagramCheck {
        public static boolean areAnagrams(String str1, String str2) {
            if (str1.length() != str2.length()) return false;
            char[] arr1 = str1.toCharArray();
            char[] arr2 = str2.toCharArray();
            Arrays.sort(arr1);
            Arrays.sort(arr2);
            return Arrays.equals(arr1, arr2);
        }
    
        public static void main(String[] args) {
            String str1 = "listen";
            String str2 = "silent";
            System.out.println("Anagrams: " + areAnagrams(str1, str2));
        }
    }
                `,
                python: `
    def are_anagrams(str1, str2):
        return sorted(str1) == sorted(str2)
    
    if __name__ == "__main__":
        str1 = "listen"
        str2 = "silent"
        print("Anagrams:", are_anagrams(str1, str2))
                `
            }
        },
        validParentheses: {
            question: "Write a program to check if a string of parentheses is valid.",
            input: "\"()[]{}\"",
            output: "Valid: true",
            solutions: {
                c: `
    #include <stdio.h>
    #include <string.h>
    #include <stdlib.h>
    
    int isValid(char *s) {
        int stack[100], top = -1;
        for (int i = 0; s[i]; i++) {
            if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
                stack[++top] = s[i];
            } else {
                if (top == -1) return 0;
                char last = stack[top--];
                if ((s[i] == ')' && last != '(') ||
                    (s[i] == '}' && last != '{') ||
                    (s[i] == ']' && last != '[')) {
                    return 0;
                }
            }
        }
        return top == -1;
    }
    
    int main() {
        char str[] = "()[]{}";
        printf("Valid: %s\\n", isValid(str) ? "true" : "false");
        return 0;
    }
                `,
                cpp: `
    #include <iostream>
    #include <stack>
    
    bool isValid(const std::string &s) {
        std::stack<char> stack;
        for (char c : s) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.empty()) return false;
                char last = stack.top();
                stack.pop();
                if ((c == ')' && last != '(') ||
                    (c == '}' && last != '{') ||
                    (c == ']' && last != '[')) {
                    return false;
                }
            }
        }
        return stack.empty();
    }
    
    int main() {
        std::string str = "()[]{}";
        std::cout << "Valid: " << (isValid(str) ? "true" : "false") << std::endl;
        return 0;
    }
                `,
                java: `
    import java.util.Stack;
    
    public class ValidParentheses {
        public static boolean isValid(String s) {
            Stack<Character> stack = new Stack<>();
            for (char c : s.toCharArray()) {
                if (c == '(' || c == '{' || c == '[') {
                    stack.push(c);
                } else {
                    if (stack.isEmpty()) return false;
                    char last = stack.pop();
                    if ((c == ')' && last != '(') ||
                        (c == '}' && last != '{') ||
                        (c == ']' && last != '[')) {
                        return false;
                    }
                }
            }
            return stack.isEmpty();
        }
    
        public static void main(String[] args) {
            String str = "()[]{}";
            System.out.println("Valid: " + isValid(str));
        }
    }
                `,
                python: `
    def is_valid(s):
        stack = []
        for c in s:
            if c in "({[":
                stack.append(c)
            else:
                if not stack:
                    return False
                last = stack.pop()
                if (c == ')' and last != '(') or \
                   (c == '}' and last != '{') or \
                   (c == ']' and last != '['):
                    return False
        return not stack
    
    if __name__ == "__main__":
        str = "()[]{}"
        print("Valid:", is_valid(str))
                `
            }
        },

     
        
            printTriangle: {
                question: "Write a program to print a right-angled triangle pattern of stars.",
                input: "5",
                output: `
        *
        **
        ***
        ****
        *****
        `,
                solutions: {
                    c: `
        #include <stdio.h>
        
        int main() {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= i; j++) {
                    printf("*");
                }
                printf("\\n");
            }
            return 0;
        }
                    `,
                    cpp: `
        #include <iostream>
        
        int main() {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= i; j++) {
                    std::cout << "*";
                }
                std::cout << std::endl;
            }
            return 0;
        }
                    `,
                    java: `
        public class PrintTriangle {
            public static void main(String[] args) {
                int n = 5;
                for (int i = 1; i <= n; i++) {
                    for (int j = 1; j <= i; j++) {
                        System.out.print("*");
                    }
                    System.out.println();
                }
            }
        }
                    `,
                    python: `
        def print_triangle(n):
            for i in range(1, n + 1):
                print("*" * i)
        
        if __name__ == "__main__":
            n = 5
            print_triangle(n)
                    `
                }
            },
            printPyramid: {
                question: "Write a program to print a pyramid pattern of stars.",
                input: "5",
                output: `
            *
           ***
          *****
         *******
        *********
        `,
                solutions: {
                    c: `
        #include <stdio.h>
        
        int main() {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = i; j < n; j++) {
                    printf(" ");
                }
                for (int j = 1; j <= (2 * i - 1); j++) {
                    printf("*");
                }
                printf("\\n");
            }
            return 0;
        }
                    `,
                    cpp: `
        #include <iostream>
        
        int main() {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = i; j < n; j++) {
                    std::cout << " ";
                }
                for (int j = 1; j <= (2 * i - 1); j++) {
                    std::cout << "*";
                }
                std::cout << std::endl;
            }
            return 0;
        }
                    `,
                    java: `
        public class PrintPyramid {
            public static void main(String[] args) {
                int n = 5;
                for (int i = 1; i <= n; i++) {
                    for (int j = i; j < n; j++) {
                        System.out.print(" ");
                    }
                    for (int j = 1; j <= (2 * i - 1); j++) {
                        System.out.print("*");
                    }
                    System.out.println();
                }
            }
        }
                    `,
                    python: `
        def print_pyramid(n):
            for i in range(1, n + 1):
                print(" " * (n - i) + "*" * (2 * i - 1))
        
        if __name__ == "__main__":
            n = 5
            print_pyramid(n)
                    `
                }
            },
            printDiamond: {
                question: "Write a program to print a diamond pattern of stars.",
                input: "5",
                output: `
            *
           ***
          *****
         *******
        *********
         *******
          *****
           ***
            *
        `,
                solutions: {
                    c: `
        #include <stdio.h>
        
        int main() {
            int n = 5;
            // Upper part of diamond
            for (int i = 1; i <= n; i++) {
                for (int j = i; j < n; j++) {
                    printf(" ");
                }
                for (int j = 1; j <= (2 * i - 1); j++) {
                    printf("*");
                }
                printf("\\n");
            }
            // Lower part of diamond
            for (int i = n - 1; i >= 1; i--) {
                for (int j = n; j > i; j--) {
                    printf(" ");
                }
                for (int j = 1; j <= (2 * i - 1); j++) {
                    printf("*");
                }
                printf("\\n");
            }
            return 0;
        }
                    `,
                    cpp: `
        #include <iostream>
        
        int main() {
            int n = 5;
            // Upper part of diamond
            for (int i = 1; i <= n; i++) {
                for (int j = i; j < n; j++) {
                    std::cout << " ";
                }
                for (int j = 1; j <= (2 * i - 1); j++) {
                    std::cout << "*";
                }
                std::cout << std::endl;
            }
            // Lower part of diamond
            for (int i = n - 1; i >= 1; i--) {
                for (int j = n; j > i; j--) {
                    std::cout << " ";
                }
                for (int j = 1; j <= (2 * i - 1); j++) {
                    std::cout << "*";
                }
                std::cout << std::endl;
            }
            return 0;
        }
                    `,
                    java: `
        public class PrintDiamond {
            public static void main(String[] args) {
                int n = 5;
                // Upper part of diamond
                for (int i = 1; i <= n; i++) {
                    for (int j = i; j < n; j++) {
                        System.out.print(" ");
                    }
                    for (int j = 1; j <= (2 * i - 1); j++) {
                        System.out.print("*");
                    }
                    System.out.println();
                }
                // Lower part of diamond
                for (int i = n - 1; i >= 1; i--) {
                    for (int j = n; j > i; j--) {
                        System.out.print(" ");
                    }
                    for (int j = 1; j <= (2 * i - 1); j++) {
                        System.out.print("*");
                    }
                    System.out.println();
                }
            }
        }
                    `,
                    python: `
        def print_diamond(n):
            # Upper part of diamond
            for i in range(1, n + 1):
                print(" " * (n - i) + "*" * (2 * i - 1))
            # Lower part of diamond
            for i in range(n - 1, 0, -1):
                print(" " * (n - i) + "*" * (2 * i - 1))
        
        if __name__ == "__main__":
            n = 5
            print_diamond(n)
                    `
                }
            },
            printNumberPyramid: {
                question: "Write a program to print a number pyramid pattern.",
                input: "5",
                output: `
            1
           121
          12321
         1234321
        123454321
        `,
                solutions: {
                    c: `
        #include <stdio.h>
        
        int main() {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = i; j < n; j++) {
                    printf(" ");
                }
                for (int j = 1; j <= i; j++) {
                    printf("%d", j);
                }
                for (int j = i - 1; j >= 1; j--) {
                    printf("%d", j);
                }
                printf("\\n");
            }
            return 0;
        }
                    `,
                    cpp: `
        #include <iostream>
        
        int main() {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = i; j < n; j++) {
                    std::cout << " ";
                }
                for (int j = 1; j <= i; j++) {
                    std::cout << j;
                }
                for (int j = i - 1; j >= 1; j--) {
                    std::cout << j;
                }
                std::cout << std::endl;
            }
            return 0;
        }
                    `,
                    java: `
        public class PrintNumberPyramid {
            public static void main(String[] args) {
                int n = 5;
                for (int i = 1; i <= n; i++) {
                    for (int j = i; j < n; j++) {
                        System.out.print(" ");
                    }
                    for (int j = 1; j <= i; j++) {
                        System.out.print(j);
                    }
                    for (int j = i - 1; j >= 1; j--) {
                        System.out.print(j);
                    }
                    System.out.println();
                }
            }
        }
                    `,
                    python: `
        def print_number_pyramid(n):
            for i in range(1, n + 1):
                print(" " * (n - i) + "".join(str(j) for j in range(1, i + 1)) + "".join(str(j) for j in range(i - 1, 0, -1)))
        
        if __name__ == "__main__":
            n = 5
            print_number_pyramid(n)
                    `
                }
            },
       
        
        fibonacciSequence: {
            question: "Write a program to generate Fibonacci sequence.",
            input: "10",
            output: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34",
            solutions: {
                c: `
    #include <stdio.h>
    
    void fibonacci(int n) {
        int t1 = 0, t2 = 1, nextTerm;
        for (int i = 1; i <= n; ++i) {
            printf("%d, ", t1);
            nextTerm = t1 + t2;
            t1 = t2;
            t2 = nextTerm;
        }
    }
    
    int main() {
        int n = 10; // Number of terms
        fibonacci(n);
        return 0;
    }
                `,
                cpp: `
    #include <iostream>
    
    void fibonacci(int n) {
        int t1 = 0, t2 = 1, nextTerm;
        for (int i = 1; i <= n; ++i) {
            std::cout << t1 << ", ";
            nextTerm = t1 + t2;
            t1 = t2;
            t2 = nextTerm;
        }
    }
    
    int main() {
        int n = 10; // Number of terms
        fibonacci(n);
        return 0;
    }
                `,
                java: `
    public class FibonacciSequence {
        public static void fibonacci(int n) {
            int t1 = 0, t2 = 1, nextTerm;
            for (int i = 1; i <= n; ++i) {
                System.out.print(t1 + ", ");
                nextTerm = t1 + t2;
                t1 = t2;
                t2 = nextTerm;
            }
        }
    
        public static void main(String[] args) {
            int n = 10; // Number of terms
            fibonacci(n);
        }
    }
                `,
                python: `
    def fibonacci(n):
        t1, t2 = 0, 1
        for _ in range(n):
            print(t1, end=", ")
            nextTerm = t1 + t2
            t1, t2 = t2, nextTerm
    
    if __name__ == "__main__":
        n = 10  # Number of terms
        fibonacci(n)
                `
            }
        },
        mergeSortedArrays: {
            question: "Write a program to merge two sorted arrays.",
            input: "[1, 3, 5], [2, 4, 6]",
            output: "[1, 2, 3, 4, 5, 6]",
            solutions: {
                c: `
    #include <stdio.h>
    
    void merge(int arr1[], int size1, int arr2[], int size2) {
        int i = 0, j = 0, k = 0;
        int merged[size1 + size2];
        
        while (i < size1 && j < size2) {
            if (arr1[i] < arr2[j]) {
                merged[k++] = arr1[i++];
            } else {
                merged[k++] = arr2[j++];
            }
        }
        while (i < size1) merged[k++] = arr1[i++];
        while (j < size2) merged[k++] = arr2[j++];
    
        printf("[");
        for (int x = 0; x < size1 + size2; x++) {
            printf("%d", merged[x]);
            if (x < size1 + size2 - 1) printf(", ");
        }
        printf("]\\n");
    }
    
    int main() {
        int arr1[] = {1, 3, 5};
        int arr2[] = {2, 4, 6};
        merge(arr1, 3, arr2, 3);
        return 0;
    }
                `,
                cpp: `
    #include <iostream>
    #include <vector>
    
    std::vector<int> mergeSortedArrays(const std::vector<int>& arr1, const std::vector<int>& arr2) {
        std::vector<int> merged;
        int i = 0, j = 0;
    
        while (i < arr1.size() && j < arr2.size()) {
            if (arr1[i] < arr2[j]) {
                merged.push_back(arr1[i++]);
            } else {
                merged.push_back(arr2[j++]);
            }
        }
        while (i < arr1.size()) merged.push_back(arr1[i++]);
        while (j < arr2.size()) merged.push_back(arr2[j++]);
    
        return merged;
    }
    
    int main() {
        std::vector<int> arr1 = {1, 3, 5};
        std::vector<int> arr2 = {2, 4, 6};
        std::vector<int> merged = mergeSortedArrays(arr1, arr2);
        
        std::cout << "[";
        for (size_t x = 0; x < merged.size(); x++) {
            std::cout << merged[x];
            if (x < merged.size() - 1) std::cout << ", ";
        }
        std::cout << "]" << std::endl;
        return 0;
    }
                `,
                java: `
    import java.util.ArrayList;
    import java.util.List;
    
    public class MergeSortedArrays {
        public static List<Integer> mergeSortedArrays(int[] arr1, int[] arr2) {
            List<Integer> merged = new ArrayList<>();
            int i = 0, j = 0;
    
            while (i < arr1.length && j < arr2.length) {
                if (arr1[i] < arr2[j]) {
                    merged.add(arr1[i++]);
                } else {
                    merged.add(arr2[j++]);
                }
            }
            while (i < arr1.length) merged.add(arr1[i++]);
            while (j < arr2.length) merged.add(arr2[j++]);
    
            return merged;
        }
    
        public static void main(String[] args) {
            int[] arr1 = {1, 3, 5};
            int[] arr2 = {2, 4, 6};
            List<Integer> merged = mergeSortedArrays(arr1, arr2);
    
            System.out.print("[");
            for (int i = 0; i < merged.size(); i++) {
                System.out.print(merged.get(i));
                if (i < merged.size() - 1) System.out.print(", ");
            }
            System.out.println("]");
        }
    }
                `,
                python: `
    def merge_sorted_arrays(arr1, arr2):
        merged = []
        i, j = 0, 0
        while i < len(arr1) and j < len(arr2):
            if arr1[i] < arr2[j]:
                merged.append(arr1[i])
                i += 1
            else:
                merged.append(arr2[j])
                j += 1
        merged.extend(arr1[i:])
        merged.extend(arr2[j:])
        return merged
    
    if __name__ == "__main__":
        arr1 = [1, 3, 5]
        arr2 = [2, 4, 6]
        merged = merge_sorted_arrays(arr1, arr2)
        print(merged)
                `
            }
        },
        twoSum: {
            question: "Write a program to find two numbers that add up to a target.",
            input: "[2, 7, 11, 15], target = 9",
            output: "[0, 1]",
            solutions: {
                c: `
    #include <stdio.h>
    #include <stdlib.h>
    
    int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
        for (int i = 0; i < numsSize; i++) {
            for (int j = i + 1; j < numsSize; j++) {
                if (nums[i] + nums[j] == target) {
                    int* result = malloc(2 * sizeof(int));
                    result[0] = i;
                    result[1] = j;
                    *returnSize = 2;
                    return result;
                }
            }
        }
        return NULL;
    }
    
    int main() {
        int nums[] = {2, 7, 11, 15};
        int target = 9;
        int returnSize;
        int* indices = twoSum(nums, 4, target, &returnSize);
        printf("[%d, %d]\\n", indices[0], indices[1]);
        free(indices);
        return 0;
    }
                `,
                cpp: `
    #include <iostream>
    #include <unordered_map>
    #include <vector>
    
    std::vector<int> twoSum(const std::vector<int>& nums, int target) {
        std::unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
    
    int main() {
        std::vector<int> nums = {2, 7, 11, 15};
        int target = 9;
        std::vector<int> indices = twoSum(nums, target);
        std::cout << "[" << indices[0] << ", " << indices[1] << "]" << std::endl;
        return 0;
    }
                `,
                java: `
    import java.util.HashMap;
    
    public class TwoSum {
        public static int[] twoSum(int[] nums, int target) {
            HashMap<Integer, Integer> map = new HashMap<>();
            for (int i = 0; i < nums.length; i++) {
                int complement = target - nums[i];
                if (map.containsKey(complement)) {
                    return new int[] {map.get(complement), i};
                }
                map.put(nums[i], i);
            }
            return new int[0];
        }
    
        public static void main(String[] args) {
            int[] nums = {2, 7, 11, 15};
            int target = 9;
            int[] indices = twoSum(nums, target);
            System.out.printf("[%d, %d]\\n", indices[0], indices[1]);
        }
    }
                `,
                python: `
    def two_sum(nums, target):
        num_map = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_map:
                return [num_map[complement], i]
            num_map[num] = i
        return []
    
    if __name__ == "__main__":
        nums = [2, 7, 11, 15]
        target = 9
        indices = two_sum(nums, target)
        print(indices)
                `
            }
        },
    
     
        
            longestSubstring: {
                question: "Write a program to find the length of the longest substring without repeating characters.",
                input: "\"abcabcbb\"",
                output: "Length: 3",
                solutions: {
                    c: `
        #include <stdio.h>
        #include <string.h>
        
        int lengthOfLongestSubstring(char* s) {
            int n = strlen(s), maxLength = 0;
            int lastIndex[256] = {-1}; // ASCII characters
            int start = 0;
        
            for (int i = 0; i < n; i++) {
                if (lastIndex[s[i]] >= start) {
                    start = lastIndex[s[i]] + 1;
                }
                lastIndex[s[i]] = i;
                maxLength = (maxLength > (i - start + 1)) ? maxLength : (i - start + 1);
            }
            return maxLength;
        }
        
        int main() {
            char str[] = "abcabcbb";
            printf("Length: %d\\n", lengthOfLongestSubstring(str));
            return 0;
        }
                    `,
                    cpp: `
        #include <iostream>
        #include <unordered_map>
        
        int lengthOfLongestSubstring(const std::string &s) {
            std::unordered_map<char, int> map;
            int maxLength = 0, start = 0;
        
            for (int i = 0; i < s.size(); i++) {
                if (map.find(s[i]) != map.end() && map[s[i]] >= start) {
                    start = map[s[i]] + 1;
                }
                map[s[i]] = i;
                maxLength = std::max(maxLength, i - start + 1);
            }
            return maxLength;
        }
        
        int main() {
            std::string str = "abcabcbb";
            std::cout << "Length: " << lengthOfLongestSubstring(str) << std::endl;
            return 0;
        }
                    `,
                    java: `
        import java.util.HashMap;
        
        public class LongestSubstring {
            public static int lengthOfLongestSubstring(String s) {
                HashMap<Character, Integer> map = new HashMap<>();
                int maxLength = 0, start = 0;
        
                for (int i = 0; i < s.length(); i++) {
                    if (map.containsKey(s.charAt(i)) && map.get(s.charAt(i)) >= start) {
                        start = map.get(s.charAt(i)) + 1;
                    }
                    map.put(s.charAt(i), i);
                    maxLength = Math.max(maxLength, i - start + 1);
                }
                return maxLength;
            }
        
            public static void main(String[] args) {
                String str = "abcabcbb";
                System.out.println("Length: " + lengthOfLongestSubstring(str));
            }
        }
                    `,
                    python: `
        def length_of_longest_substring(s):
            char_map = {}
            max_length = start = 0
            for i, char in enumerate(s):
                if char in char_map and char_map[char] >= start:
                    start = char_map[char] + 1
                char_map[char] = i
                max_length = max(max_length, i - start + 1)
            return max_length
        
        if __name__ == "__main__":
            str = "abcabcbb"
            print("Length:", length_of_longest_substring(str))
                    `
                }
            },
            isPalindrome: {
                question: "Write a program to check if a string is a palindrome.",
                input: "\"A man, a plan, a canal: Panama\"",
                output: "Palindrome: true",
                solutions: {
                    c: `
        #include <stdio.h>
        #include <ctype.h>
        #include <string.h>
        
        int isPalindrome(char *s) {
            int left = 0, right = strlen(s) - 1;
            while (left < right) {
                while (left < right && !isalnum(s[left])) left++;
                while (left < right && !isalnum(s[right])) right--;
                if (tolower(s[left]) != tolower(s[right])) return 0;
                left++;
                right--;
            }
            return 1;
        }
        
        int main() {
            char str[] = "A man, a plan, a canal: Panama";
            printf("Palindrome: %s\\n", isPalindrome(str) ? "true" : "false");
            return 0;
        }
                    `,
                    cpp: `
        #include <iostream>
        #include <cctype>
        
        bool isPalindrome(const std::string &s) {
            int left = 0, right = s.size() - 1;
            while (left < right) {
                while (left < right && !isalnum(s[left])) left++;
                while (left < right && !isalnum(s[right])) right--;
                if (tolower(s[left]) != tolower(s[right])) return false;
                left++;
                right--;
            }
            return true;
        }
        
        int main() {
            std::string str = "A man, a plan, a canal: Panama";
            std::cout << "Palindrome: " << (isPalindrome(str) ? "true" : "false") << std::endl;
            return 0;
        }
                    `,
                    java: `
        public class Palindrome {
            public static boolean isPalindrome(String s) {
                int left = 0, right = s.length() - 1;
                while (left < right) {
                    while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
                    while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
                    if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                        return false;
                    }
                    left++;
                    right--;
                }
                return true;
            }
        
            public static void main(String[] args) {
                String str = "A man, a plan, a canal: Panama";
                System.out.println("Palindrome: " + isPalindrome(str));
            }
        }
                    `,
                    python: `
        def is_palindrome(s):
            s = ''.join(c.lower() for c in s if c.isalnum())
            return s == s[::-1]
        
        if __name__ == "__main__":
            str = "A man, a plan, a canal: Panama"
            print("Palindrome:", is_palindrome(str))
                    `
                }
            },
            factorial: {
                question: "Write a program to calculate the factorial of a number.",
                input: "5",
                output: "Factorial: 120",
                solutions: {
                    c: `
        #include <stdio.h>
        
        int factorial(int n) {
            return (n == 0) ? 1 : n * factorial(n - 1);
        }
        
        int main() {
            int num = 5;
            printf("Factorial: %d\\n", factorial(num));
            return 0;
        }
                    `,
                    cpp: `
        #include <iostream>
        
        int factorial(int n) {
            return (n == 0) ? 1 : n * factorial(n - 1);
        }
        
        int main() {
            int num = 5;
            std::cout << "Factorial: " << factorial(num) << std::endl;
            return 0;
        }
                    `,
                    java: `
        public class Factorial {
            public static int factorial(int n) {
                return (n == 0) ? 1 : n * factorial(n - 1);
            }
        
            public static void main(String[] args) {
                int num = 5;
                System.out.println("Factorial: " + factorial(num));
            }
        }
                    `,
                    python: `
        def factorial(n):
            return 1 if n == 0 else n * factorial(n - 1)
        
        if __name__ == "__main__":
            num = 5
            print("Factorial:", factorial(num))
                    `
                }
            },
            isArmstrong: {
                question: "Write a program to check if a number is an Armstrong number.",
                input: "153",
                output: "Armstrong: true",
                solutions: {
                    c: `
        #include <stdio.h>
        #include <math.h>
        
        int isArmstrong(int n) {
            int sum = 0, original = n, digits = 0;
        
            while (original != 0) {
                original /= 10;
                digits++;
            }
            
            original = n;
            while (original != 0) {
                sum += pow(original % 10, digits);
                original /= 10;
            }
            return sum == n;
        }
        
        int main() {
            int num = 153;
            printf("Armstrong: %s\\n", isArmstrong(num) ? "true" : "false");
            return 0;
        }
                    `,
                    cpp: `
        #include <iostream>
        #include <cmath>
        
        bool isArmstrong(int n) {
            int sum = 0, original = n, digits = 0;
        
            while (original != 0) {
                original /= 10;
                digits++;
            }
            
            original = n;
            while (original != 0) {
                sum += pow(original % 10, digits);
                original /= 10;
            }
            return sum == n;
        }
        
        int main() {
            int num = 153;
            std::cout << "Armstrong: " << (isArmstrong(num) ? "true" : "false") << std::endl;
            return 0;
        }
                    `,
                    java: `
        public class Armstrong {
            public static boolean isArmstrong(int n) {
                int sum = 0, original = n, digits = 0;
        
                while (original != 0) {
                    original /= 10;
                    digits++;
                }
                
                original = n;
                while (original != 0) {
                    sum += Math.pow(original % 10, digits);
                    original /= 10;
                }
                return sum == n;
            }
        
            public static void main(String[] args) {
                int num = 153;
                System.out.println("Armstrong: " + isArmstrong(num));
            }
        }
                    `,
                    python: `
        def is_armstrong(n):
            digits = len(str(n))
            sum = 0
            original = n
        
            while original != 0:
                sum += (original % 10) ** digits
                original //= 10
            return sum == n
        
        if __name__ == "__main__":
            num = 153
            print("Armstrong:", is_armstrong(num))
                    `
                }
            },
      
        
                findMaximum: {
                    question: "Write a program to find the maximum element in an array.",
                    input: "[1, 3, 5, 7, 2, 4]",
                    output: "Maximum: 7",
                    solutions: {
                        c: `
            #include <stdio.h>
            
            int findMaximum(int arr[], int size) {
                int max = arr[0];
                for (int i = 1; i < size; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                    }
                }
                return max;
            }
            
            int main() {
                int arr[] = {1, 3, 5, 7, 2, 4};
                int size = sizeof(arr) / sizeof(arr[0]);
                printf("Maximum: %d\\n", findMaximum(arr, size));
                return 0;
            }
                        `,
                        cpp: `
            #include <iostream>
            
            int findMaximum(const int arr[], int size) {
                int max = arr[0];
                for (int i = 1; i < size; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                    }
                }
                return max;
            }
            
            int main() {
                int arr[] = {1, 3, 5, 7, 2, 4};
                int size = sizeof(arr) / sizeof(arr[0]);
                std::cout << "Maximum: " << findMaximum(arr, size) << std::endl;
                return 0;
            }
                        `,
                        java: `
            public class FindMaximum {
                public static int findMaximum(int[] arr) {
                    int max = arr[0];
                    for (int i = 1; i < arr.length; i++) {
                        if (arr[i] > max) {
                            max = arr[i];
                        }
                    }
                    return max;
                }
            
                public static void main(String[] args) {
                    int[] arr = {1, 3, 5, 7, 2, 4};
                    System.out.println("Maximum: " + findMaximum(arr));
                }
            }
                        `,
                        python: `
            def find_maximum(arr):
                return max(arr)
            
            if __name__ == "__main__":
                arr = [1, 3, 5, 7, 2, 4]
                print("Maximum:", find_maximum(arr))
                        `
                    }
                },
                reverseArray: {
                    question: "Write a program to reverse an array.",
                    input: "[1, 2, 3, 4, 5]",
                    output: "[5, 4, 3, 2, 1]",
                    solutions: {
                        c: `
            #include <stdio.h>
            
            void reverseArray(int arr[], int size) {
                for (int i = 0; i < size / 2; i++) {
                    int temp = arr[i];
                    arr[i] = arr[size - i - 1];
                    arr[size - i - 1] = temp;
                }
            }
            
            int main() {
                int arr[] = {1, 2, 3, 4, 5};
                int size = sizeof(arr) / sizeof(arr[0]);
                reverseArray(arr, size);
                printf("[");
                for (int i = 0; i < size; i++) {
                    printf("%d%s", arr[i], (i < size - 1) ? ", " : "");
                }
                printf("]\\n");
                return 0;
            }
                        `,
                        cpp: `
            #include <iostream>
            
            void reverseArray(int arr[], int size) {
                for (int i = 0; i < size / 2; i++) {
                    int temp = arr[i];
                    arr[i] = arr[size - i - 1];
                    arr[size - i - 1] = temp;
                }
            }
            
            int main() {
                int arr[] = {1, 2, 3, 4, 5};
                int size = sizeof(arr) / sizeof(arr[0]);
                reverseArray(arr, size);
                std::cout << "[";
                for (int i = 0; i < size; i++) {
                    std::cout << arr[i] << (i < size - 1 ? ", " : "");
                }
                std::cout << "]" << std::endl;
                return 0;
            }
                        `,
                        java: `
            public class ReverseArray {
                public static void reverseArray(int[] arr) {
                    int size = arr.length;
                    for (int i = 0; i < size / 2; i++) {
                        int temp = arr[i];
                        arr[i] = arr[size - i - 1];
                        arr[size - i - 1] = temp;
                    }
                }
            
                public static void main(String[] args) {
                    int[] arr = {1, 2, 3, 4, 5};
                    reverseArray(arr);
                    System.out.print("[");
                    for (int i = 0; i < arr.length; i++) {
                        System.out.print(arr[i] + (i < arr.length - 1 ? ", " : ""));
                    }
                    System.out.println("]");
                }
            }
                        `,
                        python: `
            def reverse_array(arr):
                return arr[::-1]
            
            if __name__ == "__main__":
                arr = [1, 2, 3, 4, 5]
                print(reverse_array(arr))
                        `
                    }
                },
                countVowels: {
                    question: "Write a program to count the number of vowels in a string.",
                    input: "\"Hello World\"",
                    output: "Vowels Count: 3",
                    solutions: {
                        c: `
            #include <stdio.h>
            
            int countVowels(char str[]) {
                int count = 0;
                for (int i = 0; str[i] != '\\0'; i++) {
                    char c = tolower(str[i]);
                    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                        count++;
                    }
                }
                return count;
            }
            
            int main() {
                char str[] = "Hello World";
                printf("Vowels Count: %d\\n", countVowels(str));
                return 0;
            }
                        `,
                        cpp: `
            #include <iostream>
            #include <cctype>
            
            int countVowels(const std::string &str) {
                int count = 0;
                for (char c : str) {
                    c = tolower(c);
                    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                        count++;
                    }
                }
                return count;
            }
            
            int main() {
                std::string str = "Hello World";
                std::cout << "Vowels Count: " << countVowels(str) << std::endl;
                return 0;
            }
                        `,
                        java: `
            public class CountVowels {
                public static int countVowels(String str) {
                    int count = 0;
                    for (char c : str.toCharArray()) {
                        c = Character.toLowerCase(c);
                        if ("aeiou".indexOf(c) != -1) {
                            count++;
                        }
                    }
                    return count;
                }
            
                public static void main(String[] args) {
                    String str = "Hello World";
                    System.out.println("Vowels Count: " + countVowels(str));
                }
            }
                        `,
                        python: `
            def count_vowels(s):
                return sum(1 for char in s.lower() if char in "aeiou")
            
            if __name__ == "__main__":
                str = "Hello World"
                print("Vowels Count:", count_vowels(str))
                        `
                    }
                },
                concatenateStrings: {
                    question: "Write a program to concatenate two strings.",
                    input: "\"Hello, \" + \"World!\"",
                    output: "\"Hello, World!\"",
                    solutions: {
                        c: `
            #include <stdio.h>
            #include <string.h>
            
            int main() {
                char str1[] = "Hello, ";
                char str2[] = "World!";
                char result[100]; // Assuming the result won't exceed 100 characters
            
                strcpy(result, str1);
                strcat(result, str2);
            
                printf("\"%s\"\\n", result);
                return 0;
            }
                        `,
                        cpp: `
            #include <iostream>
            #include <string>
            
            int main() {
                std::string str1 = "Hello, ";
                std::string str2 = "World!";
                std::string result = str1 + str2;
            
                std::cout << "\"" << result << "\"" << std::endl;
                return 0;
            }
                        `,
                        java: `
            public class ConcatenateStrings {
                public static void main(String[] args) {
                    String str1 = "Hello, ";
                    String str2 = "World!";
                    String result = str1 + str2;
            
                    System.out.println("\"" + result + "\"");
                }
            }
                        `,
                        python: `
            def concatenate_strings(str1, str2):
                return str1 + str2
            
            if __name__ == "__main__":
                str1 = "Hello, "
                str2 = "World!"
                print(f'"{concatenate_strings(str1, str2)}"')
                        `
                    }
                },
            
            
    
};

// More coding questions can be added here
