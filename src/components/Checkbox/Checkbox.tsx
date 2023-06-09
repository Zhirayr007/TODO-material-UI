import React, { memo } from 'react';
import { CheckboxProps } from './Checkbox.types';

function CheckboxMemo({ label, checked, onChange, disabled, containerClassName = '' }: CheckboxProps) {
  return (
    <div className={`form-check mb-3 ${containerClassName}`}>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={label}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
export const Checkbox = memo(CheckboxMemo);
