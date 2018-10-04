#include "../src/main.h"
#include <assert.h>

void testGetTriangleType() {
    assert(getTriangleType(3, 4, 5) == 0);
}
void testmul() {
    assert(mul(3,4) == 12);
}
int main() {
    assert(addNumber(5, 2) == 7);
    testGetTriangleType();
    testmul();
    return 0;
}
