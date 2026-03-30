import React from 'react';
import { Box, Card, Text, Stack } from '@sanity/ui';
import { ObjectInputProps } from 'sanity';
import imageUrlBuilder from '@sanity/image-url';
import { useClient } from 'sanity';

export function PhotoPreviewInput(props: ObjectInputProps) {
  const { value, members } = props;
  const client = useClient({ apiVersion: '2024-03-13' });
  const builder = imageUrlBuilder(client);

  const hasImage = value && (value as any)?.asset;

  const isCropOpen = (members ?? []).some(
    (m) => m.kind === 'field' && (m.name === 'crop' || m.name === 'hotspot') && m.open
  );

  const imageUrl = hasImage
    ? builder.image(value as any).width(400).height(500).fit('crop').url()
    : null;

  return (
    <Stack space={4}>
      {props.renderDefault(props)}

      {imageUrl && isCropOpen && (
        <Card padding={3} radius={2} shadow={1} tone="transparent">
          <Stack space={3}>
            <Text size={1} weight="semibold" muted>
              Front-end preview (4:5 card)
            </Text>
            <Box
              style={{
                width: '200px',
                aspectRatio: '4 / 5',
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid var(--card-border-color)',
              }}
            >
              <img
                src={imageUrl}
                alt="Crop preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </Stack>
        </Card>
      )}
    </Stack>
  );
}
