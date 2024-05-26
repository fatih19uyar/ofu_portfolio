import { useState } from "react";

export default function useHandle() {
  const [loading, setLoading] = useState(false);
 
  return {
    loading,
  };
}
