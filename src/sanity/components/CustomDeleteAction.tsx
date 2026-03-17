import React, { useState } from 'react';
import { DocumentActionComponent, DocumentActionProps, useDocumentOperation } from 'sanity';
import { TrashIcon } from '@sanity/icons';

export const CustomDeleteAction: DocumentActionComponent = ({ id, type, onComplete }: DocumentActionProps) => {
  const { delete: deleteOp } = useDocumentOperation(id, type);
  const [dialogOpen, setDialogOpen] = useState(false);

  if (!deleteOp || deleteOp.disabled) {
    return null; // hide if not allowed
  }

  return {
    label: '🚨 DELETE ENTRY',
    icon: TrashIcon,
    tone: 'critical',
    onHandle: () => {
      setDialogOpen(true);
    },
    dialog: dialogOpen && {
      type: 'confirm',
      onCancel: () => setDialogOpen(false),
      onConfirm: () => {
        deleteOp.execute();
        onComplete();
      },
      message: 'Are you sure you want to permanently delete this entry?',
    },
  };
};
