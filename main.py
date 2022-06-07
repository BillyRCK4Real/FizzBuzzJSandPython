# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

def fizzbuzz(maxCount, count=1):
    if count == maxCount + 1:
        return ("end of game")
    else:
        print(count,",",("Fizz" * (count % 3 < 1) + (count % 5 < 1) * "Buzz" or "None"))
        return fizzbuzz(maxCount, count + 1)


print("Q12")
print(fizzbuzz(100))
