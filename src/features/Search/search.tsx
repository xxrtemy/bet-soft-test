import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

import './search.css';
import type { SearchProps } from './types';

export const Search = ({
  value,
  defaultValue = '',
  placeholder = 'Search',
  onChange,
  onSearch,
}: SearchProps) => {
  const [innerValue, setInnerValue] = useState(defaultValue);
  const current = value ?? innerValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;

    if (value === undefined) {
      setInnerValue(v);
    }

    onChange?.(v);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSearch?.(current.trim());
  };

  return (
    <form className="search" onSubmit={submit} role="search" aria-label="Search">
      <label className="search__label">{'Search'}</label>
      <div className="search__wrapper">
        <div className="search__field">
          <span className="search__icon" aria-hidden="true">
            <img src="/Frame_1641.svg" alt="icon" />
          </span>
          <input
            className="search__input"
            type="text"
            value={current}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </div>
        <button className="search__btn" type="submit">
          {'SEARCH'}
        </button>
      </div>
    </form>
  );
};
