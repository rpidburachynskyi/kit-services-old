//#ifndef __MINGW32__
#include <emscripten.h>
//#endif
#include <string.h>
#include <stdint.h>
#include <inttypes.h>
#include <iostream>
#include "rsa/rsa.cpp"

//#ifndef __MINGW32__
extern "C"
{
	long long int *EMSCRIPTEN_KEEPALIVE xor_encrypt(long long int *data, long int size, char *key)
	{
		auto *newData = new long long int[size];
		auto keySize = strlen(key);

		for (long int i = 0; i < size; i++)
		{
			newData[i] = data[i] ^ key[i % keySize];
		}
		return newData;
	}

	uint16_t *EMSCRIPTEN_KEEPALIVE rsa_encrypt(uint8_t *data, long int size, long int p, long int q)
	{
		int16_t * res = rsa::encrypt(data, size, p, q);
		return reinterpret_cast<uint16_t *>(res);
	}

	uint8_t *EMSCRIPTEN_KEEPALIVE rsa_decrypt(int16_t *data, long int size, long int p, long int q)
	{
		uint8_t * res = rsa::decrypt(data, size, p, q);
		return res;
	}
}
//#endif


//#ifdef __MINGW32__
//int main()
//{
//	long int p = 137, q = 113;
//	uint8_t msg[256];

//	for(int i = 0; i < 256; i++)
//		msg[i] = i;


//	int16_t * res = rsa::encrypt(msg, 256, p, q);
//	uint8_t *descrypted = rsa::decrypt(res, 256, p, q);

//	for(int i = 0; i < 256; i++)
//		if(((int)descrypted[i]) != i) throw std::runtime_error(std::to_string(i)+ " " + std::to_string((int)descrypted[i]));
//	else std::cout << i << '\t';
//	std::cout << "A";
//	return 0;
//}
//#endif

