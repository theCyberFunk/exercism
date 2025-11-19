export function nucleotideCounts(strands: string) {
  const strand_count: {[index: string]: number} = {
    'A': 0,
    'C': 0,
    'G': 0,
    'T': 0
  }
  let strand_list: string[] = strands.split('');
  
  strand_list.forEach(strand => {
    if (!Object.keys(strand_count).includes(strand)) {
      throw new Error('Invalid nucleotide in strand')
    }
    strand_count[strand] += 1  
  })
  
  return strand_count
}
