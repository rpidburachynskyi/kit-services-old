#include <cmath>
#include <string>
#include <stdlib.h>


namespace rsa_private {
bool isPrime(long int prime);
long int calculateE( long int t );
long int greatestCommonDivisor( long int e, long int t );
long int calculateD( long int e, long int t );
long int encrypt( uint8_t i, long int e, long int n );
uint8_t decrypt(long int i, long int d, long int n );

bool isPrime( long int prime)
{
	long int i, j;

	j = (long int)sqrt((long double)prime);

	for ( i = 2; i <= j; i++)
	{
		if ( prime % i == 0 )
		{
			return false;
		}
	}

	return true;
}

long int calculateE( long int t )
{
	// Выбирается целое число e ( 1 < e < t ) // взаимно простое со значением функции Эйлера (t)

	long int e;

	for ( e = 2; e < t; e++ )
	{
		if (greatestCommonDivisor( e, t ) == 1 )
		{
			return e;
		}
	}

	return -1;
}

long int greatestCommonDivisor( long int e, long int t )
{
	while ( e > 0 )
	{
		long int myTemp;

		myTemp = e;
		e = t % e;
		t = myTemp;
	}

	return t;
}

long int calculateD( long int e, long int t)
{
	// Вычисляется число d, мультипликативно обратное к числу e по модулю φ(n), то есть число, удовлетворяющее сравнению:
	//    d ⋅ e ≡ 1 (mod φ(n))

	long int d;
	long int k = 1;

	while ( 1 )
	{
		k = k + t;

		if ( k % e == 0)
		{
			d = (k / e);
			return d;
		}
	}

}


long int encrypt( uint8_t i, long int e, long int n )
{
	long int current, result;

	current = i - 97;
	result = 1;

	for ( long int j = 0; j < e; j++ )
	{
		result = result * current;
		result = result % n;
	}


	return result;
}

uint8_t decrypt(long int i, long int d, long int n)
{
	long int current, result;

	current = i;
	result = 1;

	for ( long int j = 0; j < d; j++ )
	{
		result = result * current;
		result = result % n;
	}

	return static_cast<uint8_t>(result + 97);
}
}

namespace rsa {

int16_t* encrypt(uint8_t *arr, int size, int p, int q) {
	int16_t* encryptedText = new int16_t[size];
	long int n, t, e;

	n = p * q;
	t = ( p - 1 ) * ( q - 1 );
	e = rsa_private::calculateE( t );

	for (long int i = 0; i < size; i++)
	{
		encryptedText[i] = rsa_private::encrypt( arr[i], e, n);
	}

	return encryptedText;
}

uint8_t *decrypt (int16_t *arr, int size, int p, int q) {
	uint8_t* decryptedText = new uint8_t[size];
	long int n, t, e,d;

	n = p * q;
	t = ( p - 1 ) * ( q - 1 );
	e = rsa_private::calculateE( t );
	d = rsa_private::calculateD( e, t );

	for (long int i = 0; i < size; i++)
	{
		decryptedText[i] = rsa_private::decrypt(arr[i], d, n);
	}

	return decryptedText;
}



}


