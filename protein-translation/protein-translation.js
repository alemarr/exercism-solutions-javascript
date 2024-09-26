const map = new Map([
  ["AUG", "Methionine"],
  ["UUU", "Phenylalanine"],
  ["UUC", "Phenylalanine"],
  ["UUA", "Leucine"],
  ["UUG", "Leucine"],
  ["UCU", "Serine"],
  ["UCC", "Serine"],
  ["UCA", "Serine"],
  ["UCG", "Serine"],
  ["UAU", "Tyrosine"],
  ["UAC", "Tyrosine"],
  ["UGU", "Cysteine"],
  ["UGC", "Cysteine"],
  ["UGG", "Tryptophan"],
  ["UAA", "STOP"],
  ["UAG", "STOP"],
  ["UGA", "STOP"],
]);

const failIfNotCodon = (value) => {
  if (!map.has(value)) {
    throw new Error("Invalid codon");
  }
};

export function translate(rna) {
  const proteins = [];

  const codons = rna ? rna.match(/([A-Z]){1,3}/g) : [];
  for (const codon of codons) {
    failIfNotCodon(codon);

    const protein = map.get(codon);
    if (protein) {
      if (protein === "STOP") {
        break;
      }
      proteins.push(protein);
    }
  }

  return proteins;
}