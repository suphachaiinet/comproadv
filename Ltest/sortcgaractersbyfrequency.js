function frequencySort(s) {
    // สร้างอาร์เรย์เก็บตัวอักษรแยกออกมา
    const chars = s.split('');
  
    // สร้างเมพเก็บความถี่ของแต่ละตัวอักษร
    const frequencyMap = {};
    for (const char of chars) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
  
    // เรียงลำดับตัวอักษรตามความถี่
    chars.sort((a, b) => frequencyMap[b] - frequencyMap[a]);
  
    // สร้างสตริงผลลัพธ์โดยการเรียงตัวอักษรที่เรียงแล้วตามลำดับ
    return chars.join('');
  }
  
  console.log(frequencySort("tree"));   // ผลลัพธ์: "eert"
  console.log(frequencySort("cccaaa")); // ผลลัพธ์: "aaaccc"
  console.log(frequencySort("Aabb"));   // ผลลัพธ์: "bbAa"