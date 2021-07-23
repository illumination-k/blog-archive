export const posts = [
  {
    id: "AtCoderLogs",
    category: "atcoder",
    update: "Fri Jul 23 07:34:57 2021 +0900",
    url: "https://illumination-k.dev/posts/atcoder/AtCoderLogs",
    published: "Thu Jul 1 13:51:24 2021 +0900",
    data: {
      title: "AtCoderLogs",
      description: "Atcoder練習帳",
      words:
        "atcoder logs atcoderlog title abc 097 submissions 17903880 16402498 小さい 見れ 明らか 以下 substring 部分 文字 良い 16403192 swap できる 対象 エッジ する グラフ 考える 連結 成分 属し いれ index 同士 交換 可能 なる union find 正しい 場所 ある 判定 いけ 答え 求まる member いる メソッド みたい 作成 遅い デバッグ 以外 使う こと そう 基本 これ 使い なっ eqiv 177 対し 難易 変わら 水色 ...？ 204 24450812 2000 bfs やっ 十分 間に合う 24449140 貪欲 考え だめ やつ dp 帰着 オーブン 分け 通り 試す 計算 量的 無理 それぞれ かかる 時間 求め もの max 最小 leq よい 目的 sum とき frac 範囲 大きけれ いい 取り うる 用い 求まっ atcoderlogs 練習",
    },
  },
  {
    id: "competitive_memo",
    category: "atcoder",
    update: "Fri Jun 25 09:47:32 2021 +0900",
    url: "https://illumination-k.dev/posts/atcoder/competitive_memo",
    published: "Thu Jan 14 00:31:24 2021 +0900",
    data: {
      title: "競技プログラミングに関するメモ",
      description: "競技プログラミングに関する自分用のメモ",
      words:
        "計算 目安 order ある 制約 アルゴリズム 10 探索 nlogn logn ソート 3000 1000 半分 列挙 50 40 20 bit bitdp 順列 組み合わせ 配列 大き 限界 times エラー なら rust 大きい 場合 座標 圧縮 考える set 演算 平均 len min 調和 級数 sum log 倍数 ところ インクリメント 素数 判定 する とき くる abc 170 172 177 le klogk なる for in println floor mod lfloor frac rfloor equiv km 任意 整数 使っ 引く こと できる これ 等しい python ans pow よう すれ 求める arc 111 条件 頂点 浮動 小数点 誤差 07 100 000000000000001 29 28 999999999999996 みたい なり うる 四捨五入 ため 足す ごと 見通し 良く 多い 判別 print bin 1010 確認 right shifted 持っ 101 そう 期待 確率 成功 試行 行う 回数 最後 含む ガチャコンプ 問題 コンプガチャ 必要 正しい カッコ やつ いっ left おく 最終 def is correct bracket str bool if else not return false 覚え おき 真ん中 固定 解答 小さい 考えれ いい 45 回転 良い max とる gcd 123 表し 周期 あれ 一時 不定 方程式 ax by 拡張 ユークリッド 除法 解ける みる 以下 持つ 数字 調べる dp 使える 辞書 最小 貪欲 数え上げ 順番 逆転 せる うまく いく 競技 プログラミング メモ 自分 atcoder",
    },
  },
  {
    id: "dfs_tree",
    category: "atcoder",
    update: "Wed Jan 6 13:29:29 2021 +0900",
    url: "https://illumination-k.dev/posts/atcoder/dfs_tree",
    published: "Sun Jan 3 22:33:53 2021 +0900",
    data: {
      title: "RustでDFSとDFS木",
      description: "rustで木上のDFSとDFS木",
      words:
        "tl dr 先日 あっ abc 187 大敗 わけ 問題 解く とき 方針 これ 解ける 思っ dfs 本番 実装 でき ac ただ 詰まっ 記事 おき ほしい ノード インデックス 探索 振り 直し もの 無向 グラフ 扱う 場合 有用 手段 理解 足り 書き 今回 木上 やる 後退 出現 部分 raq する ため 使い 実際 セグメント のせれ 処理 使え そう 代替 スライド 参考 いただき 限る 必要 ない ところ 始め graph 隣接 リスト 形式 持つ rust use proconio input fastout fn start usize vec seen mut bool if return true println for in len main ab let iter push false output なり うまく いけ てる 構築 回数 記録 いい スタート 地点 後々 index 対応 関係 おけ へん 構造 とい ほう derive debug clone struct dfstree tree to cnt impl new self pub build root ord 同じ 載せ 番目 なっ いる 示し 取得 ある 子孫 終了 タイミング pos 保存 あり 半開 区間 表す こと 終わる 再帰 関数 抜け subtree range 以下 範囲 簡単 ゲット 用例 加算 全体 あと 帰着 ここ わかり やすく 連続 次元 配列 imos 最後 累積 戻す 実現 提出 最初 euler tour 調べ 迷走 公式 放送 やっ imosdfs みたい 138 考えれ できる 想定 入門 atcoder",
    },
  },
  {
    id: "diktstra_2d_rust",
    category: "atcoder",
    update: "Wed Sep 16 13:56:13 2020 +0900",
    url: "https://illumination-k.dev/posts/atcoder/diktstra_2d_rust",
    published: "Wed Sep 16 01:28:32 2020 +0900",
    data: {
      title: "平面上でのダイクトストラ (rust)",
      description: "二次元平面上でダイクトストラやりたいってときのための覚書",
      words:
        "tl dr 迷路 解く よう 問題 障害 物の数 特殊 処理 する とき 数える みたい やつ ダイクトストラ 使え 解ける 考え方 プライオリティ キュー binaryheap 最大 もの 取り出さ いく 数え マイナス 入れ いけ 大きい なる bfs dist 作っ おい 最初 訪れ かけ 格納 おけ 時点 最小 保存 こと できる っぽい わかっ それ docs 読ん 知っ rust tuple ord 順番 大き 評価 the sequential nature of applies to its implementations various traits for example in partialord and elements are compared sequentially until first non equal set is found 前提 allow snake case unused imports dead code use proconio input fastout marker whiteread parse line std collections num superslice ops itertools itertoolsnum arc 005 器物 損壊 高橋 ページ スタート ゴール 回数 以下 yes そう no fn main usize graph chars let mut start goal if else vec pq new push directions while some dep pop dx dy iter cx as isize cy continue cxu cyu println range flip find route dp ほう 探索 切り替わる つまり 前回 違う 場合 求め vect 64 wizard maze ワープ コスト 計算 想定 通常 移動 でき せる とかし 早く なり 混入 防ぐ ため 行っ なく 行ける 可能 ある ループ はじめ 確かめ おく 必要 sy sx gy gx left bound right up down wx wy 地ならし 左下 通っ 通る 単純 だめ 経由 定め そこ 右上 合計 一番 小さい 求める あと すべて 繰り返さ れる 回分 あり 引い いる starts enumerate rx ry ans inf sum fold acc idx cmp min 追記 見つけ 解答 書い 平面 次元 やり 覚書 atcoder",
    },
  },
  {
    id: "inclusion_and_exclusion_principle",
    category: "atcoder",
    update: "Tue Jun 22 03:08:48 2021 +0900",
    url: "https://illumination-k.dev/posts/atcoder/inclusion_and_exclusion_principle",
    published: "Sun Jun 20 21:02:51 2021 +0900",
    data: {
      title: "包除原理とオイラー関数について",
      description: "包除原理とその実装、オイラー関数に関するメモ",
      words:
        "tl dr 自分 原理 オイラー 関数 整理 おき メモ 書き 正確 情報 文献 ほう いい 通り 証明 意味 組合せ intersection union 変換 する 公式 begin aligned cup sum leq cap end 集合 要素 正直 自信 ない 属する 任意 考え 左辺 数え上げ られ 右辺 プラス マイナス 考慮 含む in 含ま カウント 行わ もの れる kc 同様 組み合わせ space かけ 一方 定理 なる 回数 等しい こと 言え 成り立つ はず 実装 これ bit 探索 使っ 書け 100 以下 倍数 rust fn main let nums vec mut counter for len 進数 とき popcount count ones mul if continue else println わかる 素因数 分解 すれ 数え上げる 使え 自然 個数 phi 書く prod left frac right やっ てる 正しい 最後 変形 なっ 素数 かける ex 一般 10 )）。 ここ 示せれ よい 使う therefore なり 示せ 乗法 性質 離れ しまう 人的 こっち 理解 やすかっ 参考 動画 atcoder",
    },
  },
  {
    id: "manhattan",
    category: "atcoder",
    update: "Mon Sep 14 01:50:55 2020 +0900",
    url: "https://illumination-k.dev/posts/atcoder/manhattan",
    published: "Mon Sep 14 01:14:59 2020 +0900",
    data: {
      title: "Manhattan Distance Memo",
      description: "マンハッタン距離に関するメモ",
      words:
        "tl dr メモ 詳しく 最近 45 回転 事情 参照 ほしい マンハッタン 距離 以下 よう 表さ れる 最大 与え られ とき 求め 探索 する かかっ しまう せる 手法 使う なる 変換 こと 本来 sqrt 大き かかる 本質 場合 無視 できる つまり 見え 可能 疑う よい まま 行う 現れる 絶対 考える max 番目 注目 そこ 戻す でき 表す くる 置く なっ ij 目的 leq これ 変形 最初 入れ替え 結果 変わら それぞれ 独立 計算 一番 大きい もの 小さい 引け いい min 書く 同様 最小 求める 解く 次元 空間 拡大 km むずかしい manhattan distance memo atcoder",
    },
  },
  {
    id: "fastapi_sqlarchemy_heroku",
    category: "backend",
    update: "Tue Jun 29 21:01:45 2021 +0900",
    url: "https://illumination-k.dev/posts/backend/fastapi_sqlarchemy_heroku",
    published: "Sun Jun 20 18:45:25 2021 +0900",
    data: {
      title: "FastAPI + SQLAlechmy (Postgres) でHerokuにデプロイ",
      description:
        "思ったよりFastAPI、PostgresでHerokuにデプロイするということにだけ焦点を当てた記事が見つからなかったので書いておきました。",
      words:
        "tl dr fastapi restful api python 構築 する とき 非常 便利 マイクロウェブフレームワーク パフォーマンス 優れ サポート おり swagger ui ドキュメント 自動的 生成 れる 素晴らしい 実際 heroku 無料 利用 でき デプロイ 簡単 テスト サーバー 作成 重宝 いる postgres sql データベース 絡めよ 思う 必然 使う 必要 あり 使い方 書い ある 記事 単純 こと 焦点 当て なかっ 書き dependencies orm sqlalchemy 接続 ため psycopg binary 使い 個人 pipenv 使っ pipfile 用意 あと post データ つい ほしい pydantic toml title source name pypi url https org simple verify ssl true packages 65 uvicorn 14 18 requires version allow prereleases 試運転 依存 関係 インストール app ファイル 今回 bash install mkdir appfrom import start get async def root return message hello world 起動 main reload host port 8002 localhost 見え いれ 成功 local 環境 docker ローカル db できる よう dockerfile from slim env lang utf lc all run pip copy tmp lock workdir system rm rf services container command 8000 volumes build restart always tty ports image 11 data var lib postgresql 5432 environment user password モデル 定義 sqlalechemy todo テーブル 自動 model py create table metadata engine base bind checkfirst asdict メソッド ない 自前 辞書 変換 関数 column scoped session sessionmaker ext declarative functions func sqltypes datetime integer string text encoding echo false autocommit autoflush declare for query property class tablename id primary key description created at default now to dict col getattr in columns リクエスト ボディ 入れ クラス httpexception status responses jsonresponse basemodel factory todos qq str try add commit refresh except rollback raise code 500 detail cannot http 201 content docs アクセス ください へん 好み やり方 プロジェクト 作っ アドオン 有効 ハマり どころ 追加 変数 database 提供 これ そのまま うまく 行か みたい 感じ 引数 考慮 書き直し new os environ if is none uri else replace procfile web 5000 終わり あっ 嬉しい 完成 github sqlalechmy 思っ 見つから おき backend",
    },
  },
  {
    id: "sql_memo",
    category: "backend",
    update: "Tue Jun 22 03:08:48 2021 +0900",
    url: "https://illumination-k.dev/posts/backend/sql_memo",
    published: "Thu Jun 17 01:25:05 2021 +0900",
    data: {
      title: "SQLに関するメモ書き",
      description: "SQLに関するメモ",
      words:
        "tl dr sql メモ 入門 レベル 基本 構文 select 指定 できる すべて id name from distinct つけれ 重複 排除 以外 使える where 条件 order be ソート 降順 desc 必要 by join 内部 結合 inner 外部 left outer ある pandas 感じ on ifnull coacesce null とっ とき デフォルト coalesce 複数 調べ 返す unknown as limit 持っ くる レコード 制限 offset 番目 取得 する 組み合わせ 使う こと そう 変数 定義 declare int set 判定 is or not 大小 比較 普通 記号 なく window 関数 group まとめ られ しまう 新しい 作成 partition 使っ 対象 決定 通常 集計 専用 gid sum val over 処理 順序 られる row どこ 開始 位置 終了 以下 description current 現在 unbounded preceding 最初 following 最後 書き backend",
    },
  },
  {
    id: "bioinformatics_file_format",
    category: "bioinformatics",
    update: "Thu Sep 10 05:31:16 2020 +0900",
    url: "https://illumination-k.dev/posts/bioinformatics/bioinformatics_file_format",
    published: "Mon Sep 7 19:48:13 2020 +0900",
    data: {
      title: "Bioinformaticsで使うファイルフォーマットまとめ",
      description:
        "バイオインフォマティクスをしていて、障壁になることの1つにファイルフォーマットが多すぎる、という問題があると思います。ツールを動かそうとするとこれとこれとこれが必要となって、どうやってこの形式のファイルを作ればいいんだ？ということはよくあります。備忘録を兼ねて、よく使うフォーマットと関連するツールについてまとめておきます。",
      words:
        "tl dr バイオインフォマティクス 障壁 なる こと ファイル フォーマット すぎる 問題 ある 思い ツール 動かそ する これ 必要 なっ やっ 形式 作れ いい あり 備忘録 兼ね 使う 関連 まとめ おき 基本 網羅 てる 思う 新しい 出会え 追記 いき 一覧 fasta fastq sam bam bed gtf gff wig bigwig vcf gvcf 場面 使い 一番 最初 見る 始まる id 配列 データ そのもの 保存 分かれ 改行 許さ iub iupac 規定 いる 塩基 コード アミノ酸 使用 でき 詳しく wikipedia 参照 ください sample 以下 よう なり gi 5524211 gb aad 44166 cytochrome elephas maximus lclythigrniyygsylysetwntgimlllitmatafmgyvlpwgqmsfwgatvitnlfsaipyigtnlv ewiwggfsvdkatlnrffafhfilpftmvalagvhltflhetgsnnplgltsdsdkipfhpyytikdflg llilillllllallspdmlgdpdnhmpadplntplhikpewyflfayailrsvpnklggvlalflsivil glmpflhtskhrsmmlrplsqalfwtltmdlltltwigsqpveypytiigqmasilyfsiilaflpiagx ieny 使い道 blastdb 作成 マルチプルアラインメント 系統 解析 bowtie star マッピング インデックス アクセス 扱う tool name description seqkit なん できる go 書か マルチスレッド 対応 おり 高速 samtools faidx 変換 picard dict bedtools 情報 抜く とき ngs れる 厳密 画像 多分 シーケンサー 持っ そこ 直接 扱っ 限り 以前 読ま リード 名前 示す ヘッダ クオリティ 記載 分ける ため 置か 違い 行内 ncbi sra 存在 srr 001666 071112 slxa eas 817 345 length 36 gggtgatggccgctgccgatggcgtcaaatcccacc iiiiiiiiiiiiiiiiiiiiiiiiiiiiii ig ic agctn phred クオリティスコア もの 使わ 高い エラー 可能 低い 最近 バージョン サンガー よる オッズ そう 実際 数字 ascii 33 126 文字 エン コーディング 共通 10 log クオリティコントロール 程度 多い 印象 rna seq 介さ まま 発現 測定 クオリティコントロールツール つかわ fastqc fastp trimmomatic 定量 思え イントロン 考慮 dna 読む 処理 専用 bisulfite sequence 特殊 bulk bwa whole genome chip atac etc hisat 比べる メモリ gatk 変異 検出 推奨 quantmode 行っ くれる bismark その他 分割 ダウンサンプリング 行い 場合 紹介 有用 マージ cat ネタ gzip テーブル これら ほう 精度 salmon ウリ 個人 使っ kalisto 一緒 分かっ csv わかり やすい わから 出力 package tximport 仕方 こちら 参考 scrna それ 代表 umi tools 作ら 正規 表現 バーコード 扱える mapping 行う drop smart alevin 開発元 提供 量定 こっち solo cellranger 同一 アルゴリズム 早い genomics 全部 mirna ない 感じ isomir みたい 概念 あっ 独自 いく 統一 mirgff 提案 かなり 成熟 format ところ 書き tcga 扱わ パイプライン あと バイナリ 位置 すべて 格納 膨大 詳細 マニュアル 読ん ほしい 以外 リンク ボディ 部分 hd vn so coordinate sq sn ref ln 45 001 99 30 37 39 ttagataaaggatactg 002 aaaagataaggata 003 gcctaagctaa sa 29 17 004 16 14 atagcttcagc 2064 taggc 147 cagcggcat nm cigar 読み方 string md tag mismatch indels 取得 explain flags github pages strand specific アラインメント 操作 使え 可視 ふう 貼り つい 確認 観点 重要 igv 簡単 後述 gft bedgraph インストール おく duplicate read 除去 マッピングクオリティ フィルター 上げ 複雑 deeptools alignmentsieve コマンド 便利 フラグメントサイズ 抽出 行え bamutils トリミング 大体 cuffdiff 有名 featurecount もと カウント くれ 作者 ツイート 聞い ソース あれ 教え rsem 入れる 場所 ここ alginment based mode 遺伝子 アノテーション variant call ステップ 考え snv 想定 sv bcftools mpileup baq 補正 fp にくい freebayes ベイズ 推定 非常 煩雑 公式 役に立ち 貼っ ピーク コール 集中 領域 行わ 準ずる 転写 因子 狭い ヒストン 修飾 広い られ 方法 異なる 使い分ける macs 多く narrow broad homer 両方 motif enrichment pos pl サポート sicer htslib 本体 api 凝っ 言語 wrapper 知っ pysam rust hts nim 各種 用途 浮かび bash input output mer 機械 学習 マップ single bamtofastq fq awk bamtobed genomecov bamcoverage bg of オプション ノーマライズ rpgc normalize rpkm cpm tpm bw 扱い python pybedtools ライブラリ chrom chromstart chromend 必須 自由 決まっ ucsc faq 染色 スタート index 終了 score 任意 スコア track 濃淡 反映 thickstart cds 開始 thickend itemrgb rgb カラー blockcount exon ブロック blocksizes サイズ blockstarts 以降 パラメーター 12 呼ん 三行 微妙 扱え 意味 getfasta 興味 fi bedtobam mutation 失わ っぽい probability transcriptome 連続 表示 せる あまり methyldackel まとまっ version gffread 相互 抜き出し 番号 scaffold source どこ feature gene five prime utr start end 方向 不明 frame coding フレーム attribute セミコロン 区切り 入力 parent ensembl repeat 2419108 2419128 42 hid trf hstart hend 21 2419410 2502 alusx 303 dust pred trans 2416676 2418760 450 19 genscan 00000019335 variation 2413425 2413805 厳格 決め transcript 持た なら コメント chr hg rmsk 16777161 16777470 2147 000000 alusp 25165801 25166089 2626 aluy 33553607 33554646 626 grf fa browser 軽い 目的 おすすめ ヒートマップ pca 相関 機能 記事 オープン 勉強 決定 現状 ver 加え 含ん ワーク フロー 登場 イメージ ページ プログラム 組ん 動かし merge split intersect 行える vcftools おこなえる snpshift フィルタ リング vcflib java ベンチマーク とっ snpeff 付け 集計 プログラミング パッケージ 系列 タブ pandas pyvcf vcfr 候補 fileformat vcfv filedate 20090805 myimputationprogramv reference file references 1000 genomespilot contig 20 62435964 assembly cdf 379 618 ff 66 beb da species homo sapiens taxonomy phasing partial info ns number type integer samples with data dp total depth af float allele frequency aa ancestral db flag dbsnp membership build 129 hapmap filter quality below 50 less than have gt genotype gq hq haplotype alt qual na 00001 00002 00003 14370 rs 6054257 pass 48 51 43 17330 11 017 49 58 65 41 1110696 6040355 67 333 667 23 27 18 35 1230237 47 13 54 56 60 61 1234567 microsat gtc gtct 40 dbsnps 知ら snps データベース 配布 broadinstitute google cloud platform たま twobit gcbias ビット 効率 fatotwobit 詳しい 使い方 サイト 準拠 策定 bioaxiv 論文 desvignes et al 2020 bioinfomatics 様々 mirtop 修正 seqbuster mirge sea srnabench prost 通す isomirs count matrix 用い 最後 思っ すごい 分量 しまい 間違い 指摘 いただける 幸い bioinformatics",
    },
  },
  {
    id: "cellranger_star",
    category: "bioinformatics",
    update: "Thu Sep 10 05:31:16 2020 +0900",
    url: "https://illumination-k.dev/posts/bioinformatics/cellranger_star",
    published: "Thu Sep 10 05:31:16 2020 +0900",
    data: {
      title: "CellRangerでSTARのパラメータを変更する",
      description:
        "single cell RNA-seqを知ってる人ならまず知っているであろう、Cell Ranger。使ったことがなかったんですが、ちょっと使ってみようかなと思いました。しかし、これ内部的にはSTARを使ってマッピングするんですが、STARのパラメーターを引数でとれない、という問題（誰も問題にしていない）があります。公式の解答としては、自分でビルドしてね、責任は持たないけど、ってことらしいです。",
      words:
        "tl dr single cell rna seq 知っ てる いる ranger 使っ こと なかっ みよ 思い これ 内部 star マッピング する パラメーター 引数 とれ 問題 あり 公式 解答 自分 ビルド 責任 持た dockerfile 最初 完成 貼っ おく 感じ ソース コード 改変 github clone ディレクトリ 置い docker from debian run apt get update install wget git curl build essential pkg config make clang golang 11 go libz dev libbz liblzma cython python pip proto https tlsv ssf sh rustup rs qq autoremove autoclean rm rf var lib lists log dpkg mkdir cellranger env path usr bin root cargo 28 default numpy docopt ln local dist packages core include workdir tar gz http cf 10 xgenomics com releases developers expires 1590315393 policy eyjtdgf zw lbnqiolt iljlc 291 cmnlijoiahr cdovl nmljewegdlbm tawnzlmnvbs yzwxlyxnlcy kzxzlbg wzxjzl jhbmdlci zljaumi 50 yxiuz oilcjdb 25 kaxrpb 24 ionsirgf zuxlc nuagfuijp ikfxuzpfcg jafrpbwuioje otazmtuzotn fx dfq signature svmge jpziiyfhszzujw dv ilbawvcntyfsrjtfuzhjyw zahqpd pzk 04 pm wjdwhzg gnfsy hspbrgligbsrbtj mhgubqu dymok ej vkftskz cbm yu as rbtsru 33 ceoki teznf jda 690 auc vm fnlibq irronodz dsg iao lrt nnrc 976 ito lvb 728 jykqfyqqbimteqkmki 21 hi pw arsxtvlcab echtexc onumknywyxah nfeh qi 12 bg sgsc ojbxlqcj zfxh itbsr yezcsrun om entfxvfoq key pair id apkai ryoxbwrpda zxvf martian lang download linux 86 64 add sourceme bash and miniconda cr cs lz dda 596 tenkit mropath mro pythonpath adapters pythonuserbase ld library others mroflags vdrmode rolling lc all 依存 もの 14 rust その他 必要 バイナリ dl 言語 統一 ほしい 見る わから 巨大 なっ しまっ パッケージ readme 書い 入っ エラー なり あと とき ファイル ない 怒ら れる シンボリックリンク 環境 変数 source すれ いい entrypoint 使え singularity イメージ 変換 やめ 解釈 くれる reference py 439 クラス 定義 align メソッド 使う def self read fastq fn out genome bam threads cwd none max report alignments per group tags if is os getcwd args genomedir outsammultnmax str runthreadn readnameseparator space outsamunmapped within keeppairs outsamtype sam outstd outsamorder pairedkeepinputorder ここ 好き 入れれ 無事 変更 でき パラメータ bioinformatics",
    },
  },
  {
    id: "gatk4_interval_list",
    category: "bioinformatics",
    update: "Mon Sep 28 03:47:04 2020 +0900",
    url: "https://illumination-k.dev/posts/bioinformatics/gatk4_interval_list",
    published: "Mon Sep 28 03:47:04 2020 +0900",
    data: {
      title: "GATK4をsplit intervalを使って高速化する",
      description:
        "GATK4は実行に時間がかかるツールですが、マシンパワーさえあればsplit intervalを使って高速化できます。interval listについては日本語文献が見つからなかったのでまとめておきます。",
      words:
        "tl dr gatk 実行 時間 かかる ツール マシン パワー あれ split interval 使っ 高速 でき 日本語 文献 見つから まとめ おき spark 実装 進め られ いる よう 全て 対応 わけ 2020 09 28 現在 ディレクトリ 作成 picard scatterintervalsbyns list リファレンス ゲノム インターバル リスト 形式 ファイル 変換 ポジション atgc 構成 bash reference ref fa output type acgt 分割 最終 すべて 同一 塩基 持ち splitintervals 使い 12 scatter count つき bqsr applybqsr haplotypecaller 載せ 基本 オプション 指定 する for もの 回す 感じ あと wait 処理 終了 待つ 必要 あり vcf gathervcfs 集め path to fasta dir basename your file in seq 04 11 do outfile recal data table java options xmx baserecalibrator scattered bam known sites done bqfile infile erc gvcf genotypegvcfs vcfs echo ls 00 grep sed 参考 guide best practice pipeline performance and optimization on the ibm openpower system bioinformatics",
    },
  },
  {
    id: "gatk4_ranseq_bestpractice",
    category: "bioinformatics",
    update: "Wed Sep 9 14:18:58 2020 +0900",
    url: "https://illumination-k.dev/posts/bioinformatics/gatk4_ranseq_bestpractice",
    published: "Wed Sep 9 14:18:58 2020 +0900",
    data: {
      title: "gatk4のRNA-seq bestpractice",
      description:
        "genomic sequenceと少しRNA-seqのパイプラインは違うので、bestpracticeをbashで実行するメモ",
      words:
        "tl dr genomic sequence rna seq パイプライン 違う メモ 基本 一緒 mapping star two pass 使用 する splitncigarreads 適用 vqsr 処理 異なっ これら gatk rnaseq germline snps indels 参考 順番 いき 全体 流れ 以下 通り 必要 ファイル 準備 genome pcr duplicates 除去 bqsr 計算 変異 検出 gvcf vcf 変換 フィルター 環境 docker イメージ 公式 配布 いる それ 使い bash pull broadinstitute run rm it hg 38 説明 fasta インデックス fai dict gtf gff なく よい index known 提供 google cloud platform ダウンロード すれ いい 思い でき 自力 作り こと homo sapiens assembly dbsnp 138 gz mills and 1000 gold standard 対応 idx おき ucsc tablebrowser あたり 作成 方法 samtools faidx fa picard createsequencedictionary 使っ runmode genomegenerate genomedir genomefastafiles sjdbgtffile 作る とき 使う イントロン 領域 上手く くれる 大丈夫 twopassmode basic readfilescommand gunzip readfilesin input fastq outsamtype bam sortedbycoordinate outsamattrrgline id lb lib pl illumina sm pu unit outfilenameprefix output aligned out 最近 twopassmapping くれ ため rg タグ 適当 付け 重要 そこ サンプル ごと 変更 ついで つけ 普通 そう markdup markduplicates mdedup create true validation stringency silent metrics cigar 意味 リード 分割 java options 合わせ 設定 ください xms 32 xmx split 既知 データ もと 塩基 スコア 行い その後 修正 baserecalibrator sites recal tablegatk applybqsr table haplotypecaller 手順 active region de brujin graph ローカル アセンブリ あと smith waterman ペアワイズアラインメント 潜在 場所 最後 pairhmm それぞれ 最終 決定 erc 出力 情報 含ん 詳しく こちら 参照 まま 欲しい フォーマット genotypegvcfs フィルタ リング seqeuence 解析 行う 算出 存在 ステップ 単純 今回 基づい ハードフィルタリング variantfiltration window 35 cluster filter name fs 30 qd filtered bestpractice 実行 bioinformatics",
    },
  },
  {
    id: "go_anno_deepgoplus",
    category: "bioinformatics",
    update: "Sun Apr 11 18:58:47 2021 +0900",
    url: "https://illumination-k.dev/posts/bioinformatics/go_anno_deepgoplus",
    published: "Sun Apr 11 18:58:47 2021 +0900",
    data: {
      title: "深層学習ベースのGO termアノテーションを試してみる",
      description:
        "自然言語処理技術では深層学習技術が非常に良い成果をあげています。タンパク質配列からGO Termなどのアノテーション行い、機能を推定する方法として、これまでの多くはBLASTなどの相同性検索を用いていました。最近では、いくつかのツールが深層学習ベースで機能予測を行っています。今回はdeepgoplusを試してみることにします。",
      words:
        "tl dr 自然 言語 処理 技術 深層 学習 非常 良い 成果 あげ タンパク質 配列 go term アノテーション 行い 機能 推定 する 方法 これ 多く blast 同性 検索 用い 最近 いくつ ツール ベース 予測 行っ 今回 deepgoplus 試し みる こと cnn っぽい maxat kulmanov robert hoehndorf improved protein function prediction from sequence bioinformatics volume 36 issue 15 january 2020 pages 422 429 https doi org 10 1093 btz 595 web サイト 作成 簡単 でき ただ 解析 ゲノム ワイド やろ 大変 そう 筆者 提供 いる モデル docker image 使っ github 必要 もの 準備 dockerfile おい ある コピペ 使い readme 見る 限り dockerhub 感じ 中身 pip インストール てる diamond よう python run wget http com bbuchfink releases download linux 64 tar gz xzf mv usr bin install upgrade ビルド bash build latest ダウンロード bio vec net data zxvf 動かす 目的 シロイヌナズナ fasta おき athaliana fa www arabidopsis files proteins tair lists pep 20101214 実際 置か ディレクトリ 指定 root ファイル in file あと output 名前 信頼 threshold website rm it pwd mnt out result tsv",
    },
  },
  {
    id: "phylo_raxmlng",
    category: "bioinformatics",
    update: "Thu Sep 10 05:31:16 2020 +0900",
    url: "https://illumination-k.dev/posts/bioinformatics/phylo_raxmlng",
    published: "Wed Sep 9 14:18:58 2020 +0900",
    data: {
      title: "MUSCLE + trimal + RAxML-ng-mpiを使って最尤法で系統解析",
      description:
        "遺伝子の機能や、進化を考察する上でタンパク質を用いた系統解析は重要な解析手法の一つとして知られている。今回は、MUSCLEを用いてマルチプルアラインメントを作成し、非保存領域をTrimAlで除去したあと、RAxMLを用いて最尤法によって系統解析を行う。",
      words:
        "tl dr 遺伝子 機能 進化 考察 する タンパク質 用い 系統 解析 重要 手法 一つ 知ら いる 作成 行わ れる ワーク フロー 以下 よう もの multiple alignment 保存 配列 除去 任意 使わ 方法 節約 距離 行列 最尤法 ベイズ 最近 graph splitting 挙げ られる ソフトウェア phyml raxml mrbayes 有名 今回 行う workflow by muscle 公式 サイト バイナリ ダウンロード 使用 デフォルト 一番 精度 いい 参考 パラメーター アラインメント afa 拡張 fasta 採用 in seqs fa out trimal github clone make dockerfile docker from debian run apt get update install git build essential pkg config qq autoremove autoclean rm rf var lib lists log dpkg mkdir workspace local volume workdir https com scapella source env path マニュアル よる trim automated 使う 良い ng 新しく version 公開 これ 使っ mpi 使い readme あたり ある wget unzip gcc cmake openmpi doc bin libopenmpi dev amkozlov releases download linux 86 64 zip bash sh msa all model lg bs trees 100 threads ファイル ml search bootstrapping 見る 選択 discrete gamma with categories mean category rates estimate of alpha tree bootstapping num bootstrap 付き besttree support reference edgar 2004 sequence high accuracy and throughput nucleic acids res 32 1792 1797 tool for trimming large scale phylogenetic analyses salvador capella gutiérrez josé silla martínez toni gabaldón bioinformatics 2009 aug 25 15 1972 alexey kozlov diego darriba tomáš flouri benoit morel alexandros stamatakis 2019 fast scalable user friendly maximum likelihood inference btz 305 doi 10 1093 マルチプルアラインメント 領域 あと",
    },
  },
  {
    id: "qsubpy_easy",
    category: "bioinformatics",
    update: "Thu Sep 10 05:31:16 2020 +0900",
    url: "https://illumination-k.dev/posts/bioinformatics/qsubpy_easy",
    published: "Thu Sep 10 05:31:16 2020 +0900",
    data: {
      title: "コマンドをqsubで直接ジョブに投げられるようにする",
      description:
        "スパコンを使っていると、qsubを使ってジョブを投げることがあるのではないかと思います。このときに、ワンライナーを実行したいときなど、一回ファイル作ってからコマンドを投げるのが非常にめんどくさいことがあります。そこで、Pythonのargparseとsubprocessを使って擬似的にコマンドからジョブを投げられるようにしました。",
      words:
        "tl dr スパコン 使っ いる qsub ジョブ 投げる こと ある 思い とき ワン ライナー 実行 ファイル 作っ コマンド 非常 めんどくさい あり python argparse subprocess 擬似 投げ られる よう やっ 自体 単純 引数 各種 パラメーター 受け取っ 加工 作成 対し コード usr local bin import os random from datetime def main parser argumentparser add argument command type str required true mem default slot name none remove action store args parse param vmem req pe time now strftime script bash cwd source bashrc profile set eu if is file tmp 010 format randint 10 sh else with open as write join commands run 運用 場所 パス ついで シンボリックリンク おけ いつ 使える なる おすすめ qsubpy py おく cat export path to directory ln みたい echo hello 感じ られ リソース 指定 16 必要 ない もらえれ 消え 名前 hoge ください デフォルト ランダム 整数 つけ 個人 足せ 簡単 log へん じれる みる 便利 注意 シバン 各自 環境 合わせ 権限 なけれ chmod 直接 する bioinformatics",
    },
  },
  {
    id: "rust_fastqgz",
    category: "bioinformatics",
    update: "Sat Dec 26 01:41:09 2020 +0900",
    url: "https://illumination-k.dev/posts/bioinformatics/rust_fastqgz",
    published: "Sat Dec 26 01:41:09 2020 +0900",
    data: {
      title: "Rustでfastq/fastq.gzを読み書きする",
      description: "rust-bioを使ってfastq/fastq.gzを読み書きします。",
      words:
        "tl dr fastq ファイル 処理 する とき python サイズ 大きめ 扱っ てる 時間 かかり すぎ 辛い 気分 なり パース 自前 書い いい rust bio crate ある それ 使い 使い方 docs 読め わかる gz 形式 読み書き 単独 使え あたり フォロー おき dependencies toml title cargo io 注意 パーサー おい あり record string 持つ 仕様 アロケーション 償却 意味 速度 微妙 可能 error ハンドリング 参考 なる 高速 自分 ほう しれ read 相当 定義 以下 よう なっ from https rs 32 source src derive debug clone default serialize deserialize partialeq pub struct id desc option seq qual それぞれ メンバ 同名 関数 ex ()） アクセス でき ただ byte スライス 返し 最初 全部 読み込ん ほしい reader コピペ 貼り use std fn main let mut new stdin nb reads bases for result in records expect during parsing len println number of 場合 標準 入力 読み出し 圧倒的 多数 読み込み file path unwrap 作成 write seed 42 nucleotides writer stdout 10 100 map 13 17 don this random generator collect vec none as slice 書き込み wtr to flate zip 圧縮 扱える anyhow エラーハンドリングクレート 使用 trait bufread 持っ いる 必要 拡張 つい いれ gzdecoder そう 普通 読み込む decoder multigzdecoder bufreader open with asref box dyn fs ref ext extension if some ffi osstr buf ok else これ 準備 整い あと rdr 生成 感じ bufwrite すれ ラッパー 作れ よい こっち 書き出さ メリット 思い 浮かば 作っ こと ない 直接 gzencoder 入れる コード 書く compression bufwriter まとめ 使っ bioinformatics",
    },
  },
  {
    id: "salmon_tximport",
    category: "bioinformatics",
    update: "Wed Feb 17 14:37:59 2021 +0900",
    url: "https://illumination-k.dev/posts/bioinformatics/salmon_tximport",
    published: "Tue Jan 19 13:13:52 2021 +0900",
    data: {
      title: "salmonの出力ファイルをtximportで加工する",
      description:
        "salmonの出力ファイルはquant.sfですが、その加工は非常に多岐に渡り、結構難しいです。tximportで加工できる先と用途についてまとめていきたいと思います。",
      words:
        "tl dr salmon kalsto 速く 正確 発現 定量 ソフトウェア 単純 カウント データ 違っ 加工 用途 様々 出力 ファイル quant sf できる tximport まとめ おき 思い タブ 区切り name length effectivelength tpm numreads 持っ 公式 docs ver 40 読む これら 以下 よう 定義 名称 転写 産物 名前 fasta ヘッダ 塩基 fragment distribution sequence specific gc bias 考慮 effective 計算 使わ れる 正しい 意味 解析 使う こと 推奨 いる マップ リード 読み込む 読み込め bash ls srrxxxxxx exp drrxxxxxx 末尾 つい ディレクトリ 入っ library 読み込み files file path list pattern まま colname srr なる 置換 おく sample gsub names txout true transcripts レベル tx type false default 場合 gene 読み込ま 遺伝子 対応 せる フレーム 必要 あたり 臨機応変 する ある transcriptid geneid みたい 想定 data frame txname rownames counts sapply strsplit 直接 単位 from summarizetogene 中身 csv 形式 書き出す workspace 続い 感じ でき 目的 もの 取り出す 操作 tximportobject 確認 abundance countsfromabundance no scaledtpm lengthscaledtpm or dtuscaledtpm 面倒 別物 scaled られる それ ライブラリ サイズ スケーリング xxxxtpm 由来 扱う 好ましく それぞれ scale 方法 サンプル ごと sum とる すべて 総数 等しく なり simplesum 補正 平均 中央 differential usage dtu とき 優れ そのまま expression deg 用い 書き出し すれ 良い count write row いい tagged rnaseq 入れる かかっ よく countfromabundance 入れ ほう 普通 full rna seq 結果 ここ doc コード 改変 メモ 貼っ edger cts txi normmat obtaining per observation scaling factors for adjusted to avoid changing the magnitude of rowmeans log normcts computing sizes account composition biases between samples eff lib calcnormfactors colsums combining with and calculating offsets link glm sweep creating dgelist object use in scaleoffset filtering keep filterbyexpr deseq sampletable condition factor rep each colnames dds deseqdatasetfromtximport res results function coldata design stopifnot is round mode integer deseqdatasetfrommatrix countdata if message using just else average transcript lengths all dimnames assays avgtxlength return countabundance そう 感想 系列 ややこしい limma voom 使っ ない メリット reference vs analysis difference among original output by kallisto 非常 多岐 渡り 結構 難しい いき bioinformatics",
    },
  },
  {
    id: "library_construction_reaction",
    category: "biology",
    update: "Thu Jun 24 19:00:08 2021 +0900",
    url: "https://illumination-k.dev/posts/biology/library_construction_reaction",
    published: "Sun Jan 3 21:30:24 2021 +0900",
    data: {
      title: "NGSライブラリ調製の時に使用される反応まとめ",
      description:
        "NGSライブラリ調製の際には多様な反応が使用されている。それらのうち、知っているものについて原理をまとめていきたい。",
      words:
        "tl dr 実験 生物 学者 多く 次世代 シーケンサー ngs 使う 時代 到来 行う ため ライブラリ 調製 不可欠 使わ いる 反応 詳細 把握 そう まとめ pcr 分子生物学 基礎 言える こちら 記事 説明 簡単 おく dna rna 塩基 爆発 増幅 せる 手法 rt reverse transcript セントラル ドグマ protein こと 指し 動物 生体 基本 行わ ウィルス 起こす 転写 酵素 transcriptase 持ち 用いる cdna 由来 呼ぶ 合成 する でき 変換 あと できる よう なり 微量 検出 可能 seq とき 最初 ステップ れる プライマー 必要 種類 違い これら 配列 バーコード アダプター 付加 それら polya オリゴ dt mrna 末端 連続 polyt 持つ 用い 狙っ ただ 方法 原核 細胞 mirna 使用 場合 多い 思い ランダムプライマー ランダム 持っ なん くっつく なく 遺伝子 特異 primers tso template switching oligo terminal nucleotidyl transferase tdt 活性 もの 存在 テンプレート 依存 特定 本来 不要 しまう 望ましい あり 活用 多数 意図 polyc それ 相補 なる polyg もつ swithching 修飾 second strand synthesis 作成 つける 利用 いっ 濃度 マグネシウム イオン 後半 誘導 klenow fragment 突出 平滑 tail 実際 polymerase 鋳型 dntp 基質 datp 一緒 exonuclease 持た ligation 同士 つなげる 以外 ベクター 様々 場所 制限 切断 挿入 繋げる 下図 ある 繋げ られ 処理 リン 酸化 一般 参考 user uracil glycosylase endonuclease 両方 除去 nick 入れる adaptor cloning by gubler and hoffman procedure わけ ほう 扱い やすい 近年 rnaseh 有する rnanicking doublestrandedcdna 作ら 断片 くれ 最後 つなぐ 切れ 部分 修復 完成 調べ 知り tagmentation transposon tn フラグメント モザイク 呼ば 繋がっ ロード dimer 両端 reference セットアップ 重要 注意 特性 dropseq well library construction for next generation sequencing overviews challenges head et al 2018 enzyme applications of thermolabile ii enzymes tailing with exo 多様 うち 知っ 原理 いき biology",
    },
  },
  {
    id: "ngs_matome",
    category: "biology",
    update: "Mon Jul 19 07:17:10 2021 +0900",
    url: "https://illumination-k.dev/posts/biology/ngs_matome",
    published: "Sun Jan 3 21:30:24 2021 +0900",
    data: {
      title: "NGS解析に関するまとめ",
      description:
        "次世代シーケンサーの解析って言ってもピンとこない人が多いような気がするので、知識の整理も兼ねてその辺から軽く書いていこうと思います。生物わかんない人にわかるように頑張ろうと思います。",
      words:
        "import grid from material ui core tl dr バイオインフォマティクス っぽい こと 書こ 次世代 シーケンサー 解析 言っ 多い よう する 知識 整理 兼ね 軽く 書い いこ 思い 生物 わかん わかる 頑張ろ ...（ 無理 あり 全て 基本 pcr 微量 とれ dna in vitro 爆発 増やす 手法 ない なら 分子生物学 分野 頻出 ポリメラーゼ 新しい 伸長 せる 酵素 プライマー 一部 くっつく 配列 結合 部位 リクルート 繰り返す 同一 オーダー でき すごい 特定 増幅 場合 末端 設計 認識 サイクル 進む 場所 複製 濃縮 いき 作成 れる なっ アンプリコン 呼び 反応 狙っ できる なり 意味 可能 高い 決定 サンガー 方法 とら 以下 画像 取り込む 停止 ジデオキシヌクレオチド 同時 取り込ま ランダム 違う 合成 電気 ごと 分離 acgacgttcgtca 現在 技術 進歩 あれ 500 bp base pair 程度 リード 200 サンプル 近く 読む 経験 最新 機器 使え いける しれ fig 十分 画期的 近年 呼ば 膨大 シーケンシング 並行 実行 普及 ここ 使わ いる ブリッジ sequencing by synthesis 絞っ 説明 しよ 増やし 両端 アダプター 進化 みたい やつ つけ フロー セル 置く ハイブリダイズ 含ま 固定 （①〜②）。 とき 太い 青い 細い 同士 部分 橋渡し 構造 とり ③）。 起点 行う ④）。 状態 変性 切れる ⑤）。 局所 多量 ⑨）。 40 gb られ 材料 揃っ 塩基 方向 ブロック 蛍光 dntp 光らせ なん 確認 物質 取り除き ngs ライブラリ 調製 使用 まとめ 調整 シーケンス 結論 qiita ブログ 移し 参考 文献 原理 biology",
    },
  },
  {
    id: "seq_summary",
    category: "biology",
    update: "Mon Jun 28 08:54:21 2021 +0900",
    url: "https://illumination-k.dev/posts/biology/seq_summary",
    published: "Tue Jun 22 03:08:48 2021 +0900",
    data: {
      title: "ライブラリ調整とシーケンスの基本について",
      description:
        "次世代シーケンサー(NGS)解析技術の発展に伴い、比較的安価にシーケンスを行うことができるようになってきています。NGS解析を行うにあたって重要なライブラリ調整の原理と、シーケンサーの挙動についてまとめていきます。",
      words:
        "tl dr 次世代 シーケンサー ngs 解析 技術 発展 伴い 安価 シーケンス 行う こと できる よう なっ 重要 ライブラリ 調整 原理 挙動 まとめ いき illumina sequence by synthesis sbs 呼ば れる 使わ 使う アダプター 認識 配列 必要 様々 反応 駆使 読み dna 両端 つける あり 2021 現在 いる truseq nextera 思わ その他 adapter sequences document 参照 ください ブログ 記事 いただける 幸い 構造 基本 以下 要素 構成 名前 正式 名称 便宜 上本 これら いただき 説明 代表 フロー セル 結合 ハイブリダイズ する etc インデックス マルチ サンプル 扱う とき シーケンスプライマー read insert 実際 見る それら 全て 入っ わかる 思い single index seq fchain aatgatacggcgaccaccgagatctacactctttccctacacgacgctcttccgatct agatcggaagagcacacgtctgaactccagtcacnnnnnnnnatctcgtatgccgtcttctgcttg rchain ttactatgccgctggtggctctagatgtgagaaagggatgtgctgcgagaaggctaga tctagccttctcgtgtgcagacttgaggtcagtgnnnnnnnntagagcatacggcagaagacgaac annotation dual aatgatacggcgaccaccgagatctacacnnnnnnnnacactctttccctacacgacgctcttccgatct ttactatgccgctggtggctctagatgtgnnnnnnnntgtgagaaagggatgtgctgcgagaaggctaga aatgatacggcgaccaccgagatctacacnnnnnnnntcgtcggcagcgtcagatgtgtataagagacag ctgtctcttatacacatctccgagcccacgagacnnnnnnnnatctcgtatgccgtcttctgcttg ttactatgccgctggtggctctagatgtgnnnnnnnnagcagccgtcgcagtctacacatattctctgtc gacagagaatatgtgtagaggctcgggtgctctgnnnnnnnntagagcatacggcagaagacgaac やっ 作成 順番 流れ bp 程度 作る 方法 追加 いく ビーズ ゲル 精製 pcr 増幅 一般 今回 絞っ covaris 音波 破砕 100 200 ng ゲノム 断片 polymerase kelnow fragment 用い 末端 平滑 リン 酸化 使っ 特定 サイズ 選択 取得 klenow tail 付与 参考 ligase ライゲーション 付加 ライブラリー 調製 試薬 transposase つかっ 300 同時 鋳型 プライマー 残り ふう 読ま 最初 単語 もの シングル デュアル 呼び スライド 非常 詳しい マルチプレックス 入れる 複数 流し リード 由来 判別 ため つまり ユニーク id それ 区別 仕組み ある 組み合わせ なり multiplex 入門 ペア エンド 場合 ex ブリッジ inset pair あと 文献 library sequencing 向け キット tailing with exo marie theres gansauge tobias gerber isabelle glocke petra korlević laurin lippik sarah nagel lara maria riehl anna schmidt matthias meyer stranded preparation from highly degraded using nucleic acids research volume 45 issue 10 june 2017 page 79 https doi org 1093 nar gkx 033 動画 biology",
    },
  },
  {
    id: "codeblock_langname",
    category: "frontend",
    update: "Mon Jun 28 01:00:09 2021 +0900",
    url: "https://illumination-k.dev/posts/frontend/codeblock_langname",
    published: "Mon Jun 28 00:56:06 2021 +0900",
    data: {
      title: "CSSでコードブロックの右上に言語名を表示する",
      description:
        "コードを書くときに書いてる言語が何なのか表示すると、見るときに便利です。CSSだけで実現できます。",
      words:
        "tl dr 技術 ブログ 書い いる コード 書く 必要 ある わけ 言語 いい 感じ 表示 思っ css content 使え 簡単 する こと でき 前提 html pre code class language hello ふう ブロック 定義 部分 入り 実装 要素 前後 before after 使う テキスト 画像 挿入 選択 コピー れる 邪魔 適し 方法 以下 なり よう デザイン られ ため position relative webkit overflow scrolling touch 全体 共通 background 808080 border radius 25 rem color white font size 14 px letter spacing 025 padding absolute top right opacity 設定 rust あり 絶対 位置 ほしい 最初 タグ 名前 入っ 後ろ スタイル 最後 いき 以上 scss とき てる 見る 便利 実現 frontend",
    },
  },
  {
    id: "javascript_random",
    category: "frontend",
    update: "Sat Jul 17 03:25:16 2021 +0900",
    url: "https://illumination-k.dev/posts/frontend/javascript_random",
    published: "Fri Jul 16 07:28:23 2021 +0900",
    data: {
      title: "JavaScriptでのrandomに関するまとめ",
      description:
        "JavaScriptのランダムは非常に使い勝手が悪いので選択肢とか、よく使う関数などのまとめです。",
      words:
        "tl dr javascript ランダム 非常 使い勝手 悪い 選択肢 使う 関数 まとめ random 基礎 math 一番 簡易 手法 範囲 乱数 生成 ただ これ seed 指定 でき 嬉しく js const rand console log 5294271038323526 便利 する max function randint return floor min randfromrange xorshift 使え 簡単 良い アルゴリズム あり class constructor date now this 123456789 984328975 839047104 gen let 11 19 genfromrange abs new 638953871 10 メルセンヌツイスタ 外部 ライブラリ mt よう 感じ setseed メソッド var mersennetwister integer nextint 以上 未満 整数 decimal next 実数 配列 シャッフル 問題 重複 なく みたい こと 場合 単純 すれ いい fisher yates shuffle durstenfeld 使わ れる ほう 高速 持っ くる もの 使える randomizer fisheryatesshuffle array newarray while length push splice ダステンフィルド durstenfeldshuffle for 参考 mersenne twister in 再現 ある フィッシャー イェーツ frontend",
    },
  },
  {
    id: "json_png",
    category: "frontend",
    update: "Sun Apr 18 00:39:43 2021 +0900",
    url: "https://illumination-k.dev/posts/frontend/json_png",
    published: "Fri Sep 25 03:26:40 2020 +0900",
    data: {
      title: "JSONで画像をやりとりする python <-> JavaScript(React)",
      description:
        "Python、特にmatplotlibで作成したPNGファイルをJSONにSerializeしてフロントエンド側に送りたいときにどうすればいいのかについて",
      words:
        "tl dr matplotlib 非常 優れ python plot library バック エンド png svg 作成 フロント 送っ 表示 場合 あり すれ いい まとまっ いる 情報 なかっ メモ node 12 16 基本 bytesio 使っ buffer 読み込ん json serialize サンプル プロット 送信 する 方法 flask django ください import numpy as np pyplot plt print version linspace 10 10000 fig ax subplots sin これ シリアライズ まま でき base 64 encoding 必要 jpeg 同様 to io with buf savefig format getvalue decode utf dumps 長い 出力 省略 encodebytes javascript react こっち ある 思い jsx 使う 使い fetch axios 持っ くる もの データ data おき rendering from innerhtml 埋め込む こと 今回 inlinesvg パッケージ しまい props 受け 渡さ bash npm inlinesvgimport const return src こちら デフォルト img blob uri 入れれ new type image url createobjecturl 最後 見つから てら 残し 画像 やりとり ファイル 送り とき frontend",
    },
  },
  {
    id: "make_blog_1",
    category: "frontend",
    update: "Tue Jun 29 03:40:56 2021 +0900",
    url: "https://illumination-k.dev/posts/frontend/make_blog_1",
    published: "Mon Sep 7 18:23:38 2020 +0900",
    data: {
      title: "Next.jsでブログを作ってみた",
      description:
        "Wordpressでブログを作っていたが、パフォーマンスが遅いのでNext.jsで作り直した。ほしい要件、使うフレームワークの選定など。",
      words:
        "tl dr wordpress 機能 いら 思っ ブログ 作る 思い vscode 記事 書き markdown へん push 終わり コピペ php わから カスタマイズ 進ま ブラックボックス すぎる トップ 画面 感じ これ よく あと amp フル 対応 でき 数式 頑張り 現状 ブログコード こちら illumination blog before lighthouse top after 2020 09 30 next 要件 こと 以下 もの ほしい いえ 全部 公開 永遠 そう 作成 いき vertical ホスティング カスタム ドメイン mdx 書い github すれ 自動 更新 れる toc qiita みたい サイド バー category 別れ 一覧 検索 tag git 連動 history 連載 タグ つい 順番 ページネーション できる 長い がち スタイル material ui prism js code syntax mathml css google 関係 seo analytics pwa adsense その他 希望 理解 伴っ framework 個人 触っ いる react フレーム ワーク 選び くる gatsby 有力 思う 理由 今後 活かせ 構成 シンプル 好き 使う プラグ イン 結局 なり 作っ ついで 悪戦苦闘 残し おき 実際 作業 リンク or style 適用 いく ローダー 使っ せる 導入 する sidebar パフォーマンス 遅い 作り直し 選定 frontend",
    },
  },
  {
    id: "make_blog_2",
    category: "frontend",
    update: "Thu Sep 10 05:31:16 2020 +0900",
    url: "https://illumination-k.dev/posts/frontend/make_blog_2",
    published: "Mon Sep 7 19:48:13 2020 +0900",
    data: {
      title: "MDX or Markdown ?",
      description: "ブログ記事を書くのに、MDXを使うのか、Markdownを使うのか",
      words:
        "tl dr 最近 mdx 流行っ markdown jsx 使える すごい 思う blog 書く とき 機能 いる 感じ 記事 拡張 いら 今回 採用 理由 書こ 思い 厳密 いう フォーマット 使っ レンダリング する 変換 しまい 使お 思え 使え デメリット 個人 ブログ 使う 不安 import snowfalldata from snowfall json barchart charts recent trends 2019 has been particularly snowy year when compared to the last decade data やつ 便利 テンプレート 統一 にくく 変更 しまう 容易 エラー そう いや それ 一つ export meta title new みたい こと できる dynamic 動か fontmatter いい example const posts filename then 見た目 いけ 実際 起こっ 残る 受け 不満 vscode extension 充実 生産 効率 非常 高い へん 純粋 書ける よう メリット next js システム すごく pages hoge おく localhost 3000 そのまま ページ ピュア 適応 remark rehype プラグ イン config 全体 適用 なる あり 魅力 以下 plugins remarkmath require math remarkfrontmatter frontmatter remarkslug slug remarkheadings autolink headings remarkfootnotes footnotes rehypekatex katex rehypeprism mapbox prism withmdx options remarkplugins rehypeplugins module exports pageextensions ts tsx md 追加 なり コードシンタクス 対応 参考 amp 自前 やろ 思っ 多分 getstaticprops ファイル 読み込ん パース dangerousinnerhtml 読み込む 比べる 良い 考える plugin 一番 ラク 方法 素直 コード 想定 postid contentloader 名前 察し くれる ありがたい layout components getfilepath getfilemeta getmdnames lib blogpostpage mdcontent post return async function params filepath await props getstaticpaths mdnames paths map mdname fallback false やっ 単純 fs モジュール 一覧 取得 場所 戻し ついで メタデータ とっ パス 渡し 指定 yaml path component 作っ 実現 でき 大体 これ サイド バー 作れ header うまく 作り 考え custom loader 作る だいたい ただ 付き マークダウンファイル mdast date aa aaa 部分 type children 探せ つまり parse metadata 可能 コンポーネント 行頭 headers value depth default やり おき すれ 置く カスタム 解釈 れる 情報 含ん 受け取れる sidebar toc リファクタリング なれ ローダー 触れ 解決 ところ てる あと button push 入れ なっ られる 準拠 書い 自動 アプローチ 問題 ある 知り or frontend",
    },
  },
  {
    id: "make_blog_3",
    category: "frontend",
    update: "Thu Jul 1 02:43:50 2021 +0900",
    url: "https://illumination-k.dev/posts/frontend/make_blog_3",
    published: "Tue Sep 8 00:05:07 2020 +0900",
    data: {
      title: "Next.jsで作ったブログにStyleを適用していく",
      description:
        "Wordpressでブログを作っていたが、パフォーマンスが遅いのでNext.jsで作り直した。markdwonでレンダリングできるようになったので、Styleを適用していく。",
      words:
        "tl dr 前回 記事 markdown うまく レンダリング できる よう なっ style 適用 いく 対象 最初 書い material ui prism js code syntax amp mathml 数式 github css 対応 する 鬼門 公式 サイト ダウンロード おく 自動 生成 important 使わ でき へん 除い しまう 2021 07 01 改稿 webpack 使っ いる asset modules 使う こと raw loader 機能 実装 next config 設定 書く フル import 想定 title module exports options rules push test resourcequery type source return これ ファイル 読み込める document react from html head main nextscript serverstylesheets core styles theme libs ts ignore prismcss globalcss global export default class mydocument extends render lang ja pwa primary color meta name content palette body getinitialprops belongs to instead of app it compatible with server side generation ssg async ctx const sheets new originalrenderpage renderpage enhanceapp props collect initialprops await fragment is rendered after the and page rendering finish children toarray key custom dangerouslysetinnerhtml getstyleelement 成分 入っ しまっ 以下 感じ refactor token 落とす 作業 おけ コード ハイライト れる 順番 関係 prismjs ダーク テーマ 黒く なら 背景 おい example rust mod usize as pandas pd read csv path file katex math inlinemath 埋め込む remark 必要 ある インライン paragraph 注意 frac 普通 sum log bash yarn add 終わり 思っ なかっ サーバーサイドレンダリング とき 読み込み リセット 参考 実際 自分 画面 崩れ 時間 溶かし 幸い テンプレート 作成 くれ javascript typescript tsx 書き換え あと リンク classname 問題 行か link コンポーネント 作っ 生み出す やつ 生み出さ build 原因 削除 inputbase 怪しかっ 感想 スタイル がっ つり っぽい もの 触ら だめ 難しい bootstrap やっ 無い ブログ wordpress パフォーマンス 遅い 作り直し markdwon frontend",
    },
  },
  {
    id: "make_blog_4",
    category: "frontend",
    update: "Wed Sep 9 14:18:58 2020 +0900",
    url: "https://illumination-k.dev/posts/frontend/make_blog_4",
    published: "Wed Sep 9 14:18:58 2020 +0900",
    data: {
      title: "Next.jsでカスタムローダーを使ってmdxをAMP対応させる",
      description:
        "Wordpressでブログを作っていたが、パフォーマンスが遅いのでNext.jsで作り直した。mdxをレンダリングするときに使うカスタムローダーを自作してAMP対応させる話。",
      words:
        "tl dr markdown ファイル mdx まま img タグ 使う amp 数式 レンダリング コードシンタクス 対応 せる こと カスタム ローダー 自作 する 公式 詳しい jsx 使っ フォーマット いる components 存在 それぞれ default 変換 しまえ 良い 基本 ast 記法 以下 よう 表さ れる yaml type value button push position ある 含む node 見つけ 埋め込ん ノード いい mathml インライン inline すれ なる remark math 使え 囲ま 部分 inlinemath js toampmathml const visit require unist util module exports tomathml function return transformer transformtojsxnode parent index newnode children mathvisitor layout container data formula inlinemathvistor 単純 良かっ width height 必須 特徴 一つ css うまく resize しまう 参考 どちら 固定 必要 あり 大き 引っ張ら スマ 見る 画像 上下 不自然 空白 生まれ 今回 パース 作業 サーバー サイド やる モジュール イメージ size とっ サイズ 入れる image パッケージ 簡単 取得 できる url 取っ くる とき めんどう 非同期 処理 parse 終わっ わかる みたい っぽい あたり 理解 きれ sync request 同期 強引 解決 注意 推奨 使用 場合 自己 責任 問題 なっ てる クライアント クラッシュ やすく build 走る 思い dynamic import 始める しれ path sizeof 使わ 整形 あと リクエスト sr toampimg makevalue alt dimensions responsive src postion visitor let if startswith join process cwd public else http ftp res get buf buffer from getbody syntax highlight prismjs tokenize refactor register ところ 使い 言語 ロード よい これ amdx コード そのまま いただい かこ レポジトリ 熟読 highlighter ts ignore refractor core lang javascript tree code split registered null hchildren next wordpress ブログ 作っ パフォーマンス 遅い 作り直し frontend",
    },
  },
  {
    id: "make_blog_5",
    category: "frontend",
    update: "Tue Jun 29 04:18:18 2021 +0900",
    url: "https://illumination-k.dev/posts/frontend/make_blog_5",
    published: "Mon Sep 14 01:50:55 2020 +0900",
    data: {
      title: "Next.jsで作ってみたブログに検索機能を導入する",
      description:
        "Next.jsで作ってみたブログに形態素解析とflexsearchで検索機能を導入する",
      words:
        "tl dr 検索 機能 欲しかっ 形態素 解析 flexsearch 使っ 実装 感度 なん 感じ ngram 併用 ほう いい しれ 基本 戦略 完全 amp 対応 getserversideprops query 受け取っ かける 対象 サーバー 上げる data js みたい キャッシュ おい そこ 参照 する form 作成 get search ページ word 飛ばす jsx method action target top input type text name とき 必要 なっ くる 部分 blank 指定 あり そのまま 新しい タブ 開く kuromojin blog post 全部 とっ markdown 変換 それ cache よう 保存 strip 利用 結果 regex 関わり そう 抜い highlight 邪魔 思っ 使用 名詞 動詞 形容詞 残し 単語 以上 もの へん 設定 詰め 今回 タイトル 本体 いる 足す 足せ 思う 大まか 流れ getallposts 全体 中身 gray matter よん filtertocken ほしい トー クン title makecache const fs require path glob remark tokenize postdirpath join process cwd src pages posts function pattern md sync return markdowntotext content let use keep code err file if throw contents async filtertoken res await pos list ignore filter token includes map surface test length makepostscache filepaths promise all filepath id parse base replace readfilesync matterresult words new set filecontents export json stringify outdir writefilesync pre commit 毎回 これ 実行 間違い 忘れる husky パッケージ package build 以下 変更 scripts dev next start node script hooks yarn git add たび 自動 走る 動作 走ら bash no verify スルー 出来る page こと 作っ いく ctx 変数 うけとる 大体 情報 入っ 使う import link from layout components searchresult props meta listitems idx url li key href results ul index str split doc field default 時点 スペース 区切り ある カスタム 空白 array 以外 ドキュメント 書い とおり パス 渡し サイト 記事 google すごい 参考 gridsome イチ ブログ 作る 全文 つける building component for your 導入 frontend",
    },
  },
  {
    id: "make_blog_6",
    category: "frontend",
    update: "Wed Sep 30 03:11:19 2020 +0900",
    url: "https://illumination-k.dev/posts/frontend/make_blog_6",
    published: "Tue Sep 29 23:05:58 2020 +0900",
    data: {
      title: "next.jsで作ってみたブログにamp-sidebarを導入する",
      description:
        "next.jsで作ってみたブログにtypescriptとmaterial-uiと一緒にamp-sidebarを導入してみた。",
      words:
        "tl dr モバイル ページ サイド バー ほしい 最近 はやり floating button みたい やつ 押す 開く もの する onclick 使え かん 実装 できる amp 対応 いる 許さ とき 使える sidebar react next js 導入 事例 少なく material ui typescript 一緒 やっ 見つから でき 参考 なる こと 祈っ 記事 残し おく 普段 隠れ ボタン 表示 以外 部分 閉じる 機能 デフォルト 公式 みる html id layout nodisplay side right ul li nav item href idtwo on tap scrollto idfour class hamburger toggle 基本 指定 つけれ 開閉 よう 可能 action desc open default close いい jsx children 書け わかる 属性 使う 場合 定義 必要 ある 注意 ts ignore しれ ...）。 float こちら 簡単 core fab ok ただ まま 場所 固定 おら へん ところ export xxxprops 今回 fabprops import 用途 考え defaultprops 拡張 行っ tsx title ampfab from interface amponprops string type props const fc return ここ しまっ あわせ ampsidebar コンポーネント 作成 そこ 画面 大きい なっ れる 設定 以下 css margin top auto 20 bottom left position fixed body 直下 ない だめ div 囲っ しまう warning fragment 囲う createstyles theme makestyles styles navigationicon icons navigation usestyles display block breakpoints up sm none classes variant extended aria label classname document サイト 直接 入れる pages 中身 入る main 囲わ 入れ container 単純 head nextscript mydocument extends static async getinitialprops ctx initialprops await render これ 標準 レイアウト すれ header footer 浮い てる 作る building an website with 作っ ブログ frontend",
    },
  },
  {
    id: "make_blog_7",
    category: "frontend",
    update: "Tue Oct 6 02:02:38 2020 +0900",
    url: "https://illumination-k.dev/posts/frontend/make_blog_7",
    published: "Wed Sep 30 13:31:32 2020 +0900",
    data: {
      title: "Next.jsで作ったブログをAMPとPWAに対応させる",
      description:
        "Next.jsで作ったAMPオンリーのブログをPWAにも対応させてみた。",
      words:
        "tl dr next js pwa 対応 いう offline 有名 思い amp ページ キャッシュ これら デフォルト 自前 やる 必要 あり 参考 issue 自分 パッケージ 使っ やっ 永遠 でき 同時 しよ いる 注意 いえ こと example first コピペ する public フォルダ 準備 manifest json 用意 いい もの 以下 挙げ られ icon めんどう generator 使い start url name or shortname icons 192 512 px display maskable ある app editor 変換 purpose any プロパティ 足し サイト よう 感じ title illumination dev theme color 69435 background standalone src png sizes type image 256 384 short ik description homepage of apple touch ここ もらっ ほう 早い ヘッダー jsx link rel href 加え おき アイコ サイズ 180 serviceworker examples 置き だいたい sw global importscripts https cdn ampproject org this configures the service worker to enhance network resiliency and optimizes asset caching configuration will cache scripts with stale while revalidate strategy for longer duration than default http response headers indicate valid visited documents serve only in case flaky conditions an page static assets checkout github com learn more about how configure prefetching init assetcachingoptions regexp jpg woff css cachingstrategy options are offlinepageoptions register install html doctype installing script text javascript if navigator インストール 行え コンポーネント body 入れ data iframe layout nodisplay 作成 これ わかっ 調べる しれ 置い offlinepageoption import from components export const config true home please try again later 結果 以上 完了 top 2020 09 30 現在 lighthouse performance blog wordpress 時代 非常 成長 言える all 100 難しい 作っ ブログ せる frontend",
    },
  },
  {
    id: "make_blog_8",
    category: "frontend",
    update: "Tue Jun 29 03:40:56 2021 +0900",
    url: "https://illumination-k.dev/posts/frontend/make_blog_8",
    published: "Tue Jun 29 03:40:56 2021 +0900",
    data: {
      title:
        "amp-listを使ってNext.jsの静的サイトに他のブログ記事への誘導をランダムでつける",
      description:
        "ブログでよくある、関係のある記事をランダムで記事の一番下につけるために、Next.jsでAPIを実装したあと、amp-listを使って動的にそれらを作成します。",
      words:
        "tl dr ブログ ある 関係 記事 ランダム 一番 つけ 静的 サイト すれ いい わかり 一つ 毎回 serversideprops 呼ぶ こと 思う それ getstaticsprops 併用 やる ところ わから なり サーバーサイドレンダリング てる 遅く そう 今回 とっ アプローチ next js api 実装 amp list 使っ fetch 結果 レンダリング する 取り mustache 拡張 コンポーネント json エンド ポイント 動的 データ 取得 template 使用 行う でき 公式 ドキュメント 以下 感じ html width auto height 100 layout fixed src static inline examples data urls type div class url entry href title プレイグランド いる items youtube channel https www com ucxpbsjgkkg hqskbhwa uqw dev validator playground 基本 レイアウト 指定 ふう 決め よう 変数 利用 ただ using tag hello world 存在 いれ section no jsx テンプレート これら 方針 otherarticles 作成 そこ test post posts もの 返す 200 ts ignore よい pages ファイル 作れ export default function handler req res const articles status 実際 作っ 検索 機能 導入 キャッシュ おい 参照 配列 規定 取り出し 部分 github あり 誘導 つける ため あと それら frontend",
    },
  },
  {
    id: "next_config_js_summary",
    category: "frontend",
    update: "Thu Jul 1 12:58:39 2021 +0900",
    url: "https://illumination-k.dev/posts/frontend/next_config_js_summary",
    published: "Mon Jun 28 21:29:47 2021 +0900",
    data: {
      title: "next.config.jsで設定することのまとめ",
      description:
        "next.jsを使っているとnext.config.jsを使って設定をカスタマイズすることが多いです。next.config.jsで設定できることと、その設定の仕方についてまとめておきます。",
      words:
        "tl dr next js 使っ いる config 設定 カスタマイズ する こと 多い できる 仕方 まとめ おき 基本 javascript title module exports よう オブジェクト 形式 エクスポート redirect リダイレクト かける redirects 関数 定義 書い 配列 返す async return source test destination permanent true webpack 感じ version 11 使わ れる なる 真偽 入れる export options resolve alias component path join dirname libs fallback fs false とき error node modules realpath index not found can 困っ issue とおり 治っ ドキュメント 読む 機能 requests when normal resolving fails 読み込ま 実際 build 動く 大丈夫 target いい しれ frontend",
    },
  },
  {
    id: "react_plotly_bundle",
    category: "frontend",
    update: "Sat Jul 3 17:07:57 2021 +0900",
    url: "https://illumination-k.dev/posts/frontend/react_plotly_bundle",
    published: "Sat Jul 3 17:07:57 2021 +0900",
    data: {
      title: "plotly.jsのbundle sizeを削減する",
      description:
        "plotlyはJavascriptだけでなくPythonやRでも使われている非常に利便性の高いライブラリです。しかし、フロントエンドで使うにはバンドルサイズが大きすぎるという問題があります。plotlyのバンドルサイズの削減方法と、react-plotly.jsでの適用方法をまとめておきます。",
      words:
        "tl dr plotly javascript python 使わ いる 非常 利便 高い 可視 ライブラリ フロント エンド 使う バンドル サイズ 大き すぎる 問題 あり 削減 方法 react js 適用 まとめ おき 普通 npm install みたい こと する mb 生成 minify gzip 巨大 一般 言っ すごく 重く なり 程度 分割 用意 内容 以下 でかい name content size all 1019 kb basic dist bar pie scatter 1007 327 cartesian box contour heatmap histogram histgram dcountour image scattertenary violin 398 geo choropleth scattergeo 337 gl cone isosurface mesh streamtube surface volume 482 heatmapgl parcoords pointcloud scattergl splom 503 mapbox choroplethmapbox densitymapbox scattermapbox 525 finance candlestick funnel funnelarea indicator ohlc waterfall 353 strict barpolar carpet contourcarpet dcontour icicle parcats sankey scattercarpet scatterpolar scatterpolargl scatterternary sunburst table treemap 840 using distributed files よう インストール でき cdn 同様 専用 リンク 基本 書く あたり 一番 いい 思っ あと 用途 合わせ 使い分けれ 軽く なる はず factory ある createplotlycomponent 使い jsx title plot import from const export default 利用 使える ところ 読み込ま れる lazy 使え 使っ コンポーネント 場所 ロード 嬉しい しれ bundle frontend",
    },
  },
  {
    id: "bash_1liner",
    category: "misc",
    update: "Thu Jul 1 12:42:19 2021 +0900",
    url: "https://illumination-k.dev/posts/misc/bash_1liner",
    published: "Tue Jun 29 21:01:45 2021 +0900",
    data: {
      title: "知っておくと便利なbash知識",
      description: "知っておくと便利そうなbash知識をまとめていきます。",
      words:
        "tl dr 便利 そう bash コマンド まとめ いき 基本 長い 文章 出力 する cat eof long sentense 結果 変数 格納 くくる files ls or ファイル 代わり 標準 入力 受け取ら split echo path to file cut 計算 整数 四則 演算 割り算 切り捨て add 10 sub time frac 12 20 小数 bc つかう 44 33333333333333333333 取得 特定 拡張 csv 除い grep ディレクトリ 最後 入る 注意 除く 場合 sed 全体 basename とっ くる awk print nf 操作 使う 可読性 高く 後ろ マッチ 文字 除去 できる 以外 応用 filename test base sorted bam パス それ 一つ 方法 ある こっち 最大 aa bb cc dir 区切り 使っ 情報 sample name aaa bbb ccc first ext last tmp 番目 わかっ いる 必要 一括 置換 txt rename linux xargs mv tsv フォーマット 状態 読み込む column デフォルト tab 以下 要ら less 変換 tr 定義 確認 variable foo if then fi who is not defined シェル スクリプト alias 対話 モード 動か man aliases are expanded when the shell interactive unless expand option set using shopt see description of under builtin commands below すれ 動く 関数 同様 こと そっち しれ 参考 bashfaq 100 てる とき チェック 知っ おく 知識 misc",
    },
  },
  {
    id: "bash_permission",
    category: "misc",
    update: "Thu Jul 1 12:58:39 2021 +0900",
    url: "https://illumination-k.dev/posts/misc/bash_permission",
    published: "Thu Jul 1 10:49:08 2021 +0900",
    data: {
      title: "bashのPermission関連についてのまとめ",
      description:
        "bashのPermission関連について、すぐ忘れてしまうのでまとめておきます。",
      words:
        "tl dr bash permission 関連 忘れ しまう まとめ おき 基本 ls コマンド 見れる 見る 以下 よう 出力 rwxrwxrwx drwxrwx rw 文字 ファイル 種類 示し いる 記号 意味 ディレクトリ シンボリックリンク それ 以外 種別 部分 それぞれ 範囲 パー ミッション ある 所有 権限 グループ 10 その他 読み取り 書き込み 実行 suid sgid スティッキービート set user id 指定 ユーザー れる group 内部 作成 すべて 割り当て られる 自身 削除 行え 行える 変更 chmod help usage option mode file or octal reference rfile change the of each to with that changes like verbose but report only when is made silent quiet suppress most error messages output diagnostic for every processed no preserve root do not treat specially default fail operate recursively on use instead values recursive files and directories display this exit version information form ugoa rwxxst ugo gnu coreutils online http www org software full documentation at available locally via info invocation 仕方 数字 られ する こと 設定 できる なる rwxrw 764 rwxrwxrxw 777 660 場合 特殊 使っ どれ rwsr xr 4755 drwxr sr 2755 dir drwxrwxrxt 1777 アルファベット 代わり 対象 方法 内容 通り 付与 除去 wx 再帰 全て 755 特定 find 使う exec xargs ほう 推奨 参考 オプション 使用 最後 type 拡張 name sh デフォルトパーミッション umask 使える 可能 でき ため 必要 同様 rwxr 022 117 注意 rwx selinux 理解 通常 mac mandatory access control 追加 従来 linux 小さい security enhanced カーネル もの 標準 discretionary controls dac 任意 アクセス 制御 チェック 許可 操作 これ 米国 国家 安全 保障 national agency 開発 定義 ポリシー linx システム プロセス アクション ルール 強制 ps 確認 動作 モード 説明 enforcing 有効 あれ 止める permissive ログ 記録 disable 無効 getenforce setenforce docker ボリューム 接尾 共有 コンテント ラベル 伝える private 個別 docs ja )（ 初心者 向け わかる スティッキービット 勉強 詳しく 理由 わかれ 怖く つきあい misc",
    },
  },
  {
    id: "peco_powershell",
    category: "misc",
    update: "Mon Jun 28 08:54:21 2021 +0900",
    url: "https://illumination-k.dev/posts/misc/peco_powershell",
    published: "Sat Jun 26 19:52:30 2021 +0900",
    data: {
      title:
        "Windows(Powershell)でpecoを使ってみる (履歴のインクリメンタルサーチ)",
      description:
        "Powershellでpecoを使って履歴をインクリメンタルサーチしてみます。",
      words:
        "tl dr powershell 使う wls 使え あり いえ window 環境 最低限 整え おき wsl 外部 hdd 非常 遅く なっ しまい かなり ストレス フル なる 問題 自分 pc 開発 いる 容量 なり 使い こと peco zsh 併用 使える インクリメンタルサーチ 簡易 実装 できる ツール ctrl 履歴 検索 標準 まま づらい よう インストール chocolatey 使っ 管理 権限 必要 つき 開く choco install 表示 入力 get psreadlineoption historysavepath れる パス ある テキストファイル 保存 得る content select object unique すれ よい コマンド ユニーク ほしい 使用 流し 選択 結果 実行 られ 出力 する invoke expression 関数 function pecohistory いい profile bashrc みたい やつ echo path 確認 notepad メモ 感じ エディタ 開い でき ここ さっき 書き込ん これ keybind 登録 設定 set psreadlinekeyhandler 組み込み 場合 以下 書け 自前 スクリプト scriptblock それ chord microsoft psconsolereadline revertline insert acceptline 以上 参考 psreadline ススメ ランチャ poco 捗る 日常 生活 windows profiles みる misc",
    },
  },
  {
    id: "colorbar_and_normvalue",
    category: "python",
    update: "Sun Apr 11 14:58:48 2021 +0900",
    url: "https://illumination-k.dev/posts/python/colorbar_and_normvalue",
    published: "Sat Sep 26 00:29:05 2020 +0900",
    data: {
      title: "matplotlibでcolorbarのみplotし、ある値がどの色になるのか判定する",
      description:
        "matplotlibを使っていて、colorbarだけ作りたいとき、そして作ったcolorbarに対して、ある値がどの色になるのか知りたい、というニッチな状況への対応策",
      words:
        "tl dr matplotlib 使っ colorbar 作り なる 知り よう こと あり ex svg あっ それ 応じ つけ カラー バー 欲しい python やり方 colorbarbase 使い 範囲 決める ある colors normalize 決め import as mpl pyplot plt print version vmin 10 vmax norm 書き get cmap colormap 情報 持っ 先程 用意 用い save する とき 注意 必要 bbox inches tight オプション 指定 ticks label 消え fig ax subplots figsize wistia cbar orientation vertical sample savefig png 対応 rgba 取得 value 9998615916955017 6259284890426758 plot 判定 作っ ニッチ 状況",
    },
  },
  {
    id: "django_pylance_import",
    category: "python",
    update: "Wed Feb 17 14:37:59 2021 +0900",
    url: "https://illumination-k.dev/posts/python/django_pylance_import",
    published: "Wed Feb 17 14:37:59 2021 +0900",
    data: {
      title: "DjangoでPylanceがimportを解決しない問題の対処法",
      description:
        "Pylanceは非常に優れたコーディング支援拡張機能ですが、importがよく解決されなくて困っていました。小規模開発のときはまあいいか、と思ったりするのですが、djangoとかで解決されないと結構手間なので、解決法を調べたら解決したので書いておきます。",
      words:
        "tl dr pylance 非常 優れ コーディング 支援 拡張 機能 import 解決 困っ 小規模 開発 とき いい 思っ する django 手間 調べ 書い おき 状況 ディレクトリ 構成 app 増え くる 分割 なり 作る 感じ init py admin apps migrations models tests urls views config manage 問題 定義 モデル 使い こと あり view 単純 すれ python from これ 補完 効か could not be resolved 警告 表示 相対 イン ポート 考え 出さ 効き 起動 せよ valueerror attempted relative beyond top level package 起こり sys path 使う しれ 毎回 書く コード 方法 わかり 設定 強引 図り トラブル シューティング 読む unresolved wanings 項目 よる vscode settings json analysis extrapaths 以下 よう 作成 title 試し みる 今度 効く 対処",
    },
  },
  {
    id: "python_class_init",
    category: "python",
    update: "Tue Jun 29 22:55:19 2021 +0900",
    url: "https://illumination-k.dev/posts/python/python_class_init",
    published: "Tue Jun 29 21:01:45 2021 +0900",
    data: {
      title: "PythonのClassの生成に関してまとめてみた",
      description:
        "PythonのClassは色々難しいので、勉強のためにまとめておきます。まずはClassの生成に関してです。__new__と__init__を中心にまとめています。",
      words:
        "tl dr python クラス あり すぎ 難しい まとめ class 生成 new メソッド 呼ば あと init れる 変数 定義 行わ インスタンス できる 作成 全て 利用 それぞれ 使え する classmethod デコレータ 付け 明示 self そのもの cls 慣用 命名 挙動 確認 coding utf name none def print str id return super set staticmethod hi よう はずれ 引数 取ら なく 以下 いる 部分 こと わかり 過程 john mike 25652888 140347266309760 140347266309816 見る 自身 異なっ 違う 変更 場合 classname 10 どちら 両方 使う 使用 呼び出さ 記録 違い 具体 解説 クラスコンストラクター tuple immutable オブジェクト 初期 なに メタ 切り替える クラスデコレータ プログラミング 基礎 metaclass 挙げ られ 公式 想定 用途 っぽい 参考 データモデル 目的 不能 int サブ カスタマイズ ため カスタム オーバーライド 勉強 おき 中心",
    },
  },
  {
    id: "actix_web_diesel",
    category: "rust",
    update: "Tue Jul 20 20:15:24 2021 +0900",
    url: "https://illumination-k.dev/posts/rust/actix_web_diesel",
    published: "Mon Jul 19 20:14:49 2021 +0900",
    data: {
      title: "Actix-Web + Diesel + PostgresでCRUDしてみた",
      description:
        "Actix-webを使ってみたかったので、DieselのGetting StartをActix-webで実装しました。",
      words:
        "tl dr ほしい python typing こと actix web 入門 diesel 使っ crud 基本 getting start 再現 する 準備 インストール 今回 postgresql 使う feature postgres ため libpq dev 必要 最初 入れ bash sudo apt install cargo cli no default features 立ち 上げ docker compose 使い yaml title version services db image 11 container name volumes data var lib ports 5432 environment user password disel demo 環境 変数 env 作成 おき echo database url localhost プロジェクト 作っ migration new cd up setup generate create posts migrations date ディレクトリ sql down でき いる はず run とき 使わ れる やつ redo これら 以下 よう 書き換え table id serial primary key varchar not null body text published boolean drop これ セットアップ 終わり rust 書く もの いき orm json 扱う serde エラー ハンドリング anyhow toml tml dependencies dotenv 15 derive hello world use result get app httpserver responder async fn impl main move service bind 127 8080 await expect error in build ok curl http 構成 src rs models routes mod delete post publish schema 以上 想定 役割 名前 まま routing ところ put 実装 データベース 接続 設定 書き あと 長い つけ pg pgconnection self connectionmanager pooledconnection pub type pool pooledpgconnection uri string let std establish connection manager builder model 返す 受け取る serialize deserialize できる あり query queryable insertable crate debug struct 32 bool newpost 追記 すべて 返し tokio サポート lock httpresponse prelude index conn couldn driver from results vec block load map err eprintln internalservererror finish リスト もらえ add insert into values execute form clone accecpted created 更新 追加 行い macro extern 動かし content application first this is for false 状態 変更 簡単 なる path to owned なり update find set eq true format 足し 実行 完成 機能 github illumination",
    },
  },
  {
    id: "cmfmt",
    category: "rust",
    update: "Mon Jul 19 07:17:10 2021 +0900",
    url: "https://illumination-k.dev/posts/rust/cmfmt",
    published: "Sat Jul 17 03:25:16 2021 +0900",
    data: {
      title: "Markdownの中のコードをフォーマットするツールを作った",
      description: "Markdown内のコードをフォーマットしたいので、作りました。",
      words:
        "tl dr 技術 記事 書い いる コード 書く 必要 あり vscode 用い とき rustfmt black prettier コードフォーマッター 使っ 実際 動く 確かめる こと 多い コピペ する 修正 書き換える フォーマッター 通し 普段 自分 コーディング ずれ 括弧 フォーマッターレベル わかる ミス 今回 markdown 任意 整形 出力 ツール cmfmt 作っ 宣伝 github illumination 使い方 binary おい ある ダウンロード パス あと example md 感じ 使え デフォルト ファイル 置き換え しまう それ 場合 stdout フラグ つけれ 置き換える 代わり 標準 usage flags options help prints information output formatted to instead of overwrite the input version config path file default home toml args you would like format 設定 以下 よう 形式 これ 勝手 中身 いじれ 好き 言語 ・フォーマッター フォーマット できる はず fmt python command name py extention rust rs js write javascript langname 意味 人間 読み やすい つけ xxxxx みたい なん いい lint 接頭 認識 配列 指定 その後 コマンド 引数 でき 特定 拡張 ない くれ 作成 使用 type パース pulldown cmark 原理 やっ 滅茶苦茶 単純 code block 検出 本体 一時 保存 対象 書か 実行 読み込ん もと おきかえ 戻す 処理 終わり ブログ 統一 出し 作り",
    },
  },
  {
    id: "github_actions_release_cross",
    category: "rust",
    update: "Sat Jul 17 03:25:16 2021 +0900",
    url: "https://illumination-k.dev/posts/rust/github_actions_release_cross",
    published: "Thu Oct 8 14:40:02 2020 +0900",
    data: {
      title:
        "Github Actionsとcrossを使ってReleaseでクロスコンパイルしてバイナリをアップロードする",
      description:
        "Github Actionsとcrossを使ってReleaseでクロスコンパイルしてバイナリをアップロードする",
      words:
        "tl dr rust 用途 コマンドラインツール 作成 する こと 多い 創る とき 使う メリット シングル バイナリ 配布 できる 利用 やすい ある ソース コード github 管理 リリース たび 最新 よう おく 便利 複数 プラットフォーム 使える クロス コンパイル 自動 やり方 説明 いく cross build docker 使っ くれる パッケージ actions rs cargo 簡単 行う 使い方 非常 with use true yaml uses command args target armv unknown linux gnueabihf release and upload 作っ アクション artifact アップ ロード みたい 感じ 長く なる files to 公式 サンプル 以下 バイナリアップロード yml title simple example name publish on push tags jobs binaries runs ubuntu latest steps checkout run svenstaro action repo token secrets file mything asset tag ref overwrite body this is my text 最終 クロスビルド あわせ こちら matrix ビルド いる musl 指定 古い centos 動か 致命 問題 gnu 両方 普通 windows 入れ とく いい 思う 入れる 場合 出力 ファイル exe 必要 そこ 注意 すれ binary strategy include os 86 64 pc macos apple darwin repository install stable toolchain override all features verbose",
    },
  },
  {
    id: "polars_pandas",
    category: "rust",
    update: "Fri Jul 23 01:51:18 2021 +0900",
    url: "https://illumination-k.dev/posts/rust/polars_pandas",
    published: "Sat Jan 9 22:32:53 2021 +0900",
    data: {
      title: "Rustのデータフレームcrateのpolarsとpandasの比較",
      description:
        "rustにも実はpandas likeなcrateがあることを知ったのでpandasとの対応関係をまとめてた。最善である保証はありません。",
      words:
        "tl dr rust pandas like crate ある こと 知っ 対応 関係 まとめ 最善 保証 あり version ごと 破壊 変更 注意 する 必要 これ 使え ファイル 素早く 処理 でき そう 手軽 なかっ excvr 使う jupyter 動かせ lab python 比較 非常 やり やすく 良い image 補完 推測 効か 困り analyzer ほしい サンプル ノートブック こちら docker compose 起動 github illumination polars apache arrows ベース データフレームライブラリ py みたい あっ 速い readme ベンチマーク テスト 使い勝手 どちら いえ tidyverse いる chunkedarray 特徴 series 変換 できる 構造 持つ 様々 演算 条件 つかっ 選択 行う chunckedarray booleantype install feature ndarray ランダムサンプリング あと json serde parquet format io 今回 試し みる エラー ハンドリング anyhow 入れ おく toml title cargo dependencies 14 features random 場合 dep nightly override bash rustup 好み パッケージ 管理 ツール インストール ください 下記 todo 部分 相当 場所 書い つもり use prelude result fn main ok import 行っ 前提 as pd print dataframe 長い 畳ん 大抵 なっ くる よい 思い vs number add sub div mul 操作 mod eq equal df sum max min mean 同士 neq gt lt median var std pow あたり bit 感じ やる iterator vector もの map fold is empty contains len utf type to lowercase upper case replace default temporal あれ 時間 パース 作成 name 任意 new 名前 指定 必須 collect とき 空文字 なり let iter 10 11 12 マクロ 便利 mut select 選ぶ 返っ vec column 応じ columns とっ filter なん すれ str メソッド 使っ っぽい get もっ 来れる なら loc startswith for in names starts with 入れ替え 追加 lambda assign colum 関数 or 行える いい 見つから 四則 簡単 計算 いける owned やっ てる 解消 無名 使い 一端 apply 持た 存在 self 本体 変わっ しまう clone なる どっち 早い unwrap 32 into rename 単独 query 複数 含ま ない 思う 返す int groupby データ フレーム 準備 dates 2020 08 21 22 23 temp 20 rain 01 dict date from docs example fmt create chunked parse slice temperature ref println shape days 64 build count first last quantile unique 使い方 特定 なし 全部 単一 numpy np agg 返り hstack vstack concat stack 機能 違う 合わ nan 埋める abc nmk xyz axis しよ 思え ところ 埋め られる error 重複 抽出 duplicated 削除 両方 subset よう drop duplicates true none maintain order values read csv 以外 sep path delimiter 引数 好き 変え なく 動き paralell dask cpu 上限 コア 読み込み いや threads some csvreader 作っ infer schema has header finish write 同様 fs file csvwriter headers pivot melt join fillna sample macro 気長 いき 感想 多い 柔軟 決まり きっ 記述 生産 効率 上がり",
    },
  },
  {
    id: "rust_tips",
    category: "rust",
    update: "Sat Jul 17 11:55:41 2021 +0900",
    url: "https://illumination-k.dev/posts/rust/rust_tips",
    published: "Sat Jul 17 11:08:55 2021 +0900",
    data: {
      title: "Rust Tips",
      description: "rustで覚えておきたいことのメモ",
      words:
        "tl dr rust 覚え おき こと メモ order 真面目 とき std cmp ordering 使う 見やすい string 辞書 使える float 使え let ord 10 assert eq less min max of 実装 だめ 64 cumsum use itertools num itertoolsnum as vec iter once chain collect usize binary search 普通 便利 含ま 場合 match そのもの 全部 できる 返っ くる 最大 index 返す lower bound superslice 使っ ほう そう 自分 書く 以下 docs 引用 if the value is found then result ok returned containing matching element there are multiple matches any one could be not err where inserted while maintaining sorted 13 21 34 55 100 true false ここ みる range せる テスト atcoder version 42 これ ごと 挙動 違う コミュニティ 議論 いる よう いつ れる 不明 fn main dbg upper 下記 感じ はず おとなしく 書い いい tips",
    },
  },
];
