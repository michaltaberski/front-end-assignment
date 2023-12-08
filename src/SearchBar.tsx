import { useState } from "react";
import { SearchInput } from "./styles";
import styled from "styled-components";
import { SearchParams } from "./types";
import Select from "./Select";
import times from "lodash/times";
import { useSearch } from "./utils";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  gap: 20px;
`;

type SearchBarProps = {
  initialParams: SearchParams;
  onChange: (params: SearchParams) => void;
};

const SearchBar = ({ initialParams, onChange }: SearchBarProps) => {
  const { searchParams, updateParams } = useSearch(initialParams, onChange);

  return (
    <FlexWrapper>
      <SearchInput
        type="text"
        value={searchParams.pharse}
        onChange={(e) => {
          updateParams({ pharse: e.target.value });
        }}
        placeholder="Search..."
      />
      <Select
        label="Min rating: "
        onChange={(value) => {
          updateParams({ minAvgRating: +value });
        }}
        options={times(10, (index) => ({
          value: index,
          label: `${index}+`,
        }))}
      />
      <Select
        label="Sort by: "
        onChange={(value) => {
          updateParams({ sortBy: value as "title" | "rating" | "releaseDate" });
        }}
        options={[
          { value: "title", label: "Title" },
          { value: "rating", label: "Rating" },
          { value: "releaseDate", label: "Release date" },
        ]}
      />
    </FlexWrapper>
  );
};

export default SearchBar;
