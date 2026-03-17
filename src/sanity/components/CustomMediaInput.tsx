import React, { useCallback } from 'react';
import { Box, Button } from '@sanity/ui';
import { TrashIcon } from '@sanity/icons';
import { unset, ObjectInputProps } from 'sanity';

export function CustomMediaInput(props: ObjectInputProps) {
  const { onChange, value } = props;
  
  const handleRemove = useCallback(() => {
    onChange(unset());
  }, [onChange]);

  return (
    <Box>
      {props.renderDefault(props)}
      
      {value && (
        <Box marginTop={3}>
          <Button
            icon={TrashIcon}
            mode="ghost"
            tone="critical"
            text="Delete Current Media & Add New"
            onClick={handleRemove}
            width="fill"
          />
        </Box>
      )}
    </Box>
  );
}
