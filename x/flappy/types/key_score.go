package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ScoreKeyPrefix is the prefix to retrieve all Score
	ScoreKeyPrefix = "Score/value/"
)

// ScoreKey returns the store key to retrieve a Score from the index fields
func ScoreKey(
	addr string,
) []byte {
	var key []byte

	addrBytes := []byte(addr)
	key = append(key, addrBytes...)
	key = append(key, []byte("/")...)

	return key
}
