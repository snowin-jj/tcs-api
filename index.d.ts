interface Song {
  id: number;
  songNo: number;
  title: string;
  tamilTitle: string;
  releaseYear?: 1974;
  artistId: number;
  type: "KEETHAGAL" | "PAMALAI" | "CONVENTION" | "ALBUM";
  categoryId: number;
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
  avatarURL?: string;
  email?: string;
  songs: Song[];
}
