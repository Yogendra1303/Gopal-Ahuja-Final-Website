'use client';

import React, { useState, useEffect } from 'react';
import { LeadCaptureModal } from './ui/LeadCaptureModal';

export function GlobalLeadCapture() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    title: '',
    description: '',
    intent: '',
    fileUrl: '',
    filename: '',
    isNewsletter: false,
    defaultEmail: ''
  });

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setModalProps(customEvent.detail);
        setIsOpen(true);
      }
    };

    window.addEventListener('openLeadCapture', handleOpen);
    return () => window.removeEventListener('openLeadCapture', handleOpen);
  }, []);

  return (
    <LeadCaptureModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      {...modalProps}
    />
  );
}
