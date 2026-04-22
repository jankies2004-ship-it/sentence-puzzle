// 中学英語レベルの英文並び替え問題
// answer: 正しい語順の配列, distractors: ダミーの単語（任意）

export const allQuestions = [
  // === be動詞 現在 ===
  { id: 1, japanese: "私は学生です。", answer: ["I", "am", "a", "student", "."] },
  { id: 2, japanese: "彼は背が高い。", answer: ["He", "is", "tall", "."] },
  { id: 3, japanese: "彼女は先生です。", answer: ["She", "is", "a", "teacher", "."] },
  { id: 4, japanese: "これは私の本です。", answer: ["This", "is", "my", "book", "."] },
  { id: 5, japanese: "彼らは友達です。", answer: ["They", "are", "friends", "."] },
  { id: 6, japanese: "あなたは正しい。", answer: ["You", "are", "right", "."] },
  { id: 7, japanese: "私たちは同じクラスです。", answer: ["We", "are", "in", "the", "same", "class", "."] },
  { id: 8, japanese: "その犬はかわいい。", answer: ["The", "dog", "is", "cute", "."] },

  // === be動詞 否定文 ===
  { id: 9, japanese: "私は疲れていない。", answer: ["I", "am", "not", "tired", "."] },
  { id: 10, japanese: "彼は医者ではない。", answer: ["He", "is", "not", "a", "doctor", "."] },
  { id: 11, japanese: "これは難しくない。", answer: ["This", "is", "not", "difficult", "."] },
  { id: 12, japanese: "彼女たちは姉妹ではない。", answer: ["They", "are", "not", "sisters", "."] },

  // === be動詞 疑問文 ===
  { id: 13, japanese: "あなたは眠いですか？", answer: ["Are", "you", "sleepy", "?"] },
  { id: 14, japanese: "彼は親切ですか？", answer: ["Is", "he", "kind", "?"] },
  { id: 15, japanese: "これはあなたのペンですか？", answer: ["Is", "this", "your", "pen", "?"] },
  { id: 16, japanese: "彼女は有名ですか？", answer: ["Is", "she", "famous", "?"] },

  // === 一般動詞 現在 ===
  { id: 17, japanese: "私は音楽が好きです。", answer: ["I", "like", "music", "."] },
  { id: 18, japanese: "彼女はピアノを弾く。", answer: ["She", "plays", "the", "piano", "."] },
  { id: 19, japanese: "私は毎日学校へ行く。", answer: ["I", "go", "to", "school", "every", "day", "."] },
  { id: 20, japanese: "彼は英語を勉強する。", answer: ["He", "studies", "English", "."] },
  { id: 21, japanese: "私たちはサッカーをする。", answer: ["We", "play", "soccer", "."] },
  { id: 22, japanese: "彼女は猫を飼っている。", answer: ["She", "has", "a", "cat", "."] },
  { id: 23, japanese: "私は朝食を食べる。", answer: ["I", "eat", "breakfast", "."] },
  { id: 24, japanese: "彼は速く走る。", answer: ["He", "runs", "fast", "."] },
  { id: 25, japanese: "私は本をよく読む。", answer: ["I", "often", "read", "books", "."] },
  { id: 26, japanese: "彼女は日本語を話す。", answer: ["She", "speaks", "Japanese", "."] },

  // === 一般動詞 否定文 ===
  { id: 27, japanese: "私は肉を食べない。", answer: ["I", "don't", "eat", "meat", "."] },
  { id: 28, japanese: "彼はテレビを見ない。", answer: ["He", "doesn't", "watch", "TV", "."] },
  { id: 29, japanese: "私たちは車を持っていない。", answer: ["We", "don't", "have", "a", "car", "."] },
  { id: 30, japanese: "彼女は早起きしない。", answer: ["She", "doesn't", "get", "up", "early", "."] },

  // === 一般動詞 疑問文 ===
  { id: 31, japanese: "あなたはコーヒーが好きですか？", answer: ["Do", "you", "like", "coffee", "?"] },
  { id: 32, japanese: "彼は車を持っていますか？", answer: ["Does", "he", "have", "a", "car", "?"] },
  { id: 33, japanese: "あなたは泳げますか？", answer: ["Can", "you", "swim", "?"] },
  { id: 34, japanese: "彼女は英語を話しますか？", answer: ["Does", "she", "speak", "English", "?"] },

  // === 過去形 ===
  { id: 35, japanese: "私は昨日映画を見た。", answer: ["I", "watched", "a", "movie", "yesterday", "."] },
  { id: 36, japanese: "彼女は図書館へ行った。", answer: ["She", "went", "to", "the", "library", "."] },
  { id: 37, japanese: "私たちはテニスをした。", answer: ["We", "played", "tennis", "."] },
  { id: 38, japanese: "彼は昨夜勉強した。", answer: ["He", "studied", "last", "night", "."] },
  { id: 39, japanese: "私は朝食を食べなかった。", answer: ["I", "didn't", "eat", "breakfast", "."] },
  { id: 40, japanese: "彼女は電話をしなかった。", answer: ["She", "didn't", "call", "me", "."] },

  // === 疑問詞 ===
  { id: 41, japanese: "あなたの名前は何ですか？", answer: ["What", "is", "your", "name", "?"] },
  { id: 42, japanese: "あなたはどこに住んでいますか？", answer: ["Where", "do", "you", "live", "?"] },
  { id: 43, japanese: "あなたはいくつですか？", answer: ["How", "old", "are", "you", "?"] },
  { id: 44, japanese: "彼女はいつ来ますか？", answer: ["When", "does", "she", "come", "?"] },
  { id: 45, japanese: "あなたはなぜ泣いているのですか？", answer: ["Why", "are", "you", "crying", "?"] },
  { id: 46, japanese: "これは誰のかばんですか？", answer: ["Whose", "bag", "is", "this", "?"] },

  // === 助動詞 can ===
  { id: 47, japanese: "私はギターを弾けます。", answer: ["I", "can", "play", "the", "guitar", "."] },
  { id: 48, japanese: "彼は速く走れない。", answer: ["He", "can't", "run", "fast", "."] },
  { id: 49, japanese: "窓を開けてもいいですか？", answer: ["Can", "I", "open", "the", "window", "?"] },

  // === 未来 will / be going to ===
  { id: 50, japanese: "明日は晴れるでしょう。", answer: ["It", "will", "be", "sunny", "tomorrow", "."] },
  { id: 51, japanese: "私は明日買い物に行く予定です。", answer: ["I", "am", "going", "to", "go", "shopping", "tomorrow", "."] },
  { id: 52, japanese: "彼女はその本を読むつもりはない。", answer: ["She", "won't", "read", "the", "book", "."] },

  // === 現在進行形 ===
  { id: 53, japanese: "私は今音楽を聴いています。", answer: ["I", "am", "listening", "to", "music", "now", "."] },
  { id: 54, japanese: "彼らはサッカーをしている。", answer: ["They", "are", "playing", "soccer", "."] },
  { id: 55, japanese: "彼女は今勉強していますか？", answer: ["Is", "she", "studying", "now", "?"] },

  // === There is/are ===
  { id: 56, japanese: "公園に犬が一匹います。", answer: ["There", "is", "a", "dog", "in", "the", "park", "."] },
  { id: 57, japanese: "テーブルの上にリンゴが3つある。", answer: ["There", "are", "three", "apples", "on", "the", "table", "."] },

  // === 比較 ===
  { id: 58, japanese: "私は兄より背が高い。", answer: ["I", "am", "taller", "than", "my", "brother", "."] },
  { id: 59, japanese: "これは日本で一番高い山です。", answer: ["This", "is", "the", "highest", "mountain", "in", "Japan", "."] },
  { id: 60, japanese: "彼女は私よりも速く走る。", answer: ["She", "runs", "faster", "than", "me", "."] },

  // === 不定詞 ===
  { id: 61, japanese: "私はサッカーをするのが好きです。", answer: ["I", "like", "to", "play", "soccer", "."] },
  { id: 62, japanese: "彼は医者になりたい。", answer: ["He", "wants", "to", "be", "a", "doctor", "."] },
  { id: 63, japanese: "私は買い物に行った。", answer: ["I", "went", "to", "buy", "something", "."] },

  // === 接続詞・その他 ===
  { id: 64, japanese: "私は英語と数学が好きです。", answer: ["I", "like", "English", "and", "math", "."] },
  { id: 65, japanese: "彼は忙しいが、幸せだ。", answer: ["He", "is", "busy", "but", "happy", "."] },
  { id: 66, japanese: "もし雨なら、家にいます。", answer: ["If", "it", "rains", ",", "I", "will", "stay", "home", "."] },
  { id: 67, japanese: "私が帰ったとき、彼女は眠っていた。", answer: ["When", "I", "came", "home", ",", "she", "was", "sleeping", "."] },
  { id: 68, japanese: "私は彼が正しいと思う。", answer: ["I", "think", "that", "he", "is", "right", "."] },

  // === 命令文 ===
  { id: 69, japanese: "ここに座ってください。", answer: ["Please", "sit", "here", "."] },
  { id: 70, japanese: "静かにしてください。", answer: ["Please", "be", "quiet", "."] },
  { id: 71, japanese: "走ってはいけない。", answer: ["Don't", "run", "."] },
];
