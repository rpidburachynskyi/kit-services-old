#include <emscripten.h>

int EMSCRIPTEN_KEEPALIVE RostikFunc(int n)
{
	if (n == 0 || n == 1)
		return n;
	else
		return (RostikFunc(n - 1) + RostikFunc(n - 2));
}
