// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: flappy/score.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Score struct {
	Addr    string `protobuf:"bytes,1,opt,name=addr,proto3" json:"addr,omitempty"`
	Score   string `protobuf:"bytes,2,opt,name=score,proto3" json:"score,omitempty"`
	Creator string `protobuf:"bytes,3,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *Score) Reset()         { *m = Score{} }
func (m *Score) String() string { return proto.CompactTextString(m) }
func (*Score) ProtoMessage()    {}
func (*Score) Descriptor() ([]byte, []int) {
	return fileDescriptor_222edafffb578781, []int{0}
}
func (m *Score) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Score) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Score.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Score) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Score.Merge(m, src)
}
func (m *Score) XXX_Size() int {
	return m.Size()
}
func (m *Score) XXX_DiscardUnknown() {
	xxx_messageInfo_Score.DiscardUnknown(m)
}

var xxx_messageInfo_Score proto.InternalMessageInfo

func (m *Score) GetAddr() string {
	if m != nil {
		return m.Addr
	}
	return ""
}

func (m *Score) GetScore() string {
	if m != nil {
		return m.Score
	}
	return ""
}

func (m *Score) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*Score)(nil), "kfangw.flappy.flappy.Score")
}

func init() { proto.RegisterFile("flappy/score.proto", fileDescriptor_222edafffb578781) }

var fileDescriptor_222edafffb578781 = []byte{
	// 168 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4a, 0xcb, 0x49, 0x2c,
	0x28, 0xa8, 0xd4, 0x2f, 0x4e, 0xce, 0x2f, 0x4a, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12,
	0xc9, 0x4e, 0x4b, 0xcc, 0x4b, 0x2f, 0xd7, 0x83, 0x48, 0x41, 0x29, 0x25, 0x6f, 0x2e, 0xd6, 0x60,
	0x90, 0x22, 0x21, 0x21, 0x2e, 0x96, 0xc4, 0x94, 0x94, 0x22, 0x09, 0x46, 0x05, 0x46, 0x0d, 0xce,
	0x20, 0x30, 0x5b, 0x48, 0x84, 0x8b, 0x15, 0x6c, 0x82, 0x04, 0x13, 0x58, 0x10, 0xc2, 0x11, 0x92,
	0xe0, 0x62, 0x4f, 0x2e, 0x4a, 0x4d, 0x2c, 0xc9, 0x2f, 0x92, 0x60, 0x06, 0x8b, 0xc3, 0xb8, 0x4e,
	0x8e, 0x27, 0x1e, 0xc9, 0x31, 0x5e, 0x78, 0x24, 0xc7, 0xf8, 0xe0, 0x91, 0x1c, 0xe3, 0x84, 0xc7,
	0x72, 0x0c, 0x17, 0x1e, 0xcb, 0x31, 0xdc, 0x78, 0x2c, 0xc7, 0x10, 0xa5, 0x9e, 0x9e, 0x59, 0x92,
	0x51, 0x9a, 0xa4, 0x97, 0x9c, 0x9f, 0xab, 0x0f, 0x71, 0x87, 0x3e, 0xd4, 0x89, 0x15, 0x30, 0x46,
	0x49, 0x65, 0x41, 0x6a, 0x71, 0x12, 0x1b, 0xd8, 0xb1, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff,
	0x4c, 0xd9, 0x5e, 0x7f, 0xc2, 0x00, 0x00, 0x00,
}

func (m *Score) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Score) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Score) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintScore(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Score) > 0 {
		i -= len(m.Score)
		copy(dAtA[i:], m.Score)
		i = encodeVarintScore(dAtA, i, uint64(len(m.Score)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Addr) > 0 {
		i -= len(m.Addr)
		copy(dAtA[i:], m.Addr)
		i = encodeVarintScore(dAtA, i, uint64(len(m.Addr)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintScore(dAtA []byte, offset int, v uint64) int {
	offset -= sovScore(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Score) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Addr)
	if l > 0 {
		n += 1 + l + sovScore(uint64(l))
	}
	l = len(m.Score)
	if l > 0 {
		n += 1 + l + sovScore(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovScore(uint64(l))
	}
	return n
}

func sovScore(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozScore(x uint64) (n int) {
	return sovScore(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Score) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowScore
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Score: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Score: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Addr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowScore
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthScore
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthScore
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Addr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Score", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowScore
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthScore
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthScore
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Score = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowScore
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthScore
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthScore
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipScore(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthScore
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipScore(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowScore
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowScore
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowScore
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthScore
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupScore
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthScore
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthScore        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowScore          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupScore = fmt.Errorf("proto: unexpected end of group")
)
