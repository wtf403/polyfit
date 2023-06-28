package s3

import (
	"bytes"
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/aws/external"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

const (
	bucketName = "my-bucket-name"
)

func LoadConfig() {
	cfg, err := external.LoadDefaultAWSConfig()
	if err != nil {
		panic(fmt.Errorf("failed to load AWS config: %w", err))
	}

	// Create an S3 client with the loaded AWS config
	s3Client := s3.NewFromConfig(cfg)

	// Create the object
	url, err := createObject(context.Background(), s3Client, objectKey, objectContent)
	if err != nil {
		panic(fmt.Errorf("failed to create object: %w", err))
	}
	fmt.Printf("Created object with URL: %s\n", url)

	// Update the object
	objectContent = []byte("Hello, updated world!")
	url, err = updateObject(context.Background(), s3Client, objectKey, objectContent)
	if err != nil {
		panic(fmt.Errorf("failed to update object: %w", err))
	}
	fmt.Printf("Updated object with URL: %s\n", url)

	// Delete the object
	err = deleteObject(context.Background(), s3Client, objectKey)
	if err != nil {
		panic(fmt.Errorf("failed to delete object: %w", err))
	}
	fmt.Printf("Deleted object with key: %s\n", objectKey)
}

// createObject creates a new S3 object with the specified key and content, and returns the URL of the created object.
func createObject(ctx context.Context, s3Client *s3.Client, objectKey string, objectContent []byte) (string, error) {
	input := &s3.PutObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(objectKey),
		Body:   bytes.NewReader(objectContent),
	}

	_, err := s3Client.PutObject(ctx, input)
	if err != nil {
		return "", fmt.Errorf("failed to create object: %w", err)
	}

	// Construct the URL of the created object
	url := fmt.Sprintf("https://%s.s3.amazonaws.com/%s", bucketName, objectKey)

	return url, nil
}

// updateObject updates an existing S3 object with the specified key and content, and returns the URL of the updated object.
func updateObject(ctx context.Context, s3Client *s3.Client, objectKey string, objectContent []byte) (string, error) {
	input := &s3.PutObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(objectKey),
		Body:   bytes.NewReader(objectContent),
	}

	_, err := s3Client.PutObject(ctx, input)
	if err != nil {
		return "", fmt.Errorf("failed to update object: %w", err)
	}

	// Construct the URL of the updated object
	url := fmt.Sprintf("https://%s.s3.amazonaws.com/%s", bucketName, objectKey)

	return url, nil
}

// deleteObject deletes an existing S
