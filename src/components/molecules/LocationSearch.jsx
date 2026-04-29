import React from "react";

function LocationSearch({
  onSearch,
  placeholder = "Buscar ubicación..."
}) {
  const [value, setValue] = React.useState("");

  const handleSearch = () => {
    const searchValue = value.trim();

    if (!searchValue) return;

    onSearch(searchValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Button
        onClick={handleSearch}
        disabled={!value.trim()}
        aria-label="Buscar ubicación"
      >
        <Icon name="search" />
      </Button>
    </div>
  );
}

export default LocationSearch;