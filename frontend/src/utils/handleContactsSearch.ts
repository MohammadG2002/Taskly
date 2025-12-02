import type { User } from "../types/User";

export const handleContactsSearch = (
  contacts: User[],
  setSearchTerm: (value: string) => void,
  onSearchChange: (filteredContacts: User[]) => void
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    onSearchChange(filtered);
  };
};
