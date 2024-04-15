interface Song {
  id: number;
  songNo: number;
  title: string;
  tamilTitle: string;
  artist: Artist;
  type: "KEETHAGAL" | "PAMALAI" | "CONVENTION" | "ALBUM";
  category: Category;
  pallavi?: string;
  anuPallavi?: string;
  stanzas: string[];
}

// Easter, chrismas, good friday, etc...
interface Category {
  id: number;
  name: string;
}

interface Artist {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  songs: Song[];
}
