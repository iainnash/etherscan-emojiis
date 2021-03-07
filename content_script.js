(function () {
  const emoji = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😅",
    "😆",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "☺",
    "🙂",
    "🤗",
    "🤔",
    "😐",
    "😑",
    "😶",
    "🙄",
    "😏",
    "😣",
    "😥",
    "😮",
    "🤐",
    "😯",
    "😪",
    "😫",
    "😴",
    "😌",
    "🤓",
    "😛",
    "😜",
    "😝",
    "🤤",
    "😒",
    "😓",
    "😔",
    "😕",
    "🙃",
    "🤑",
    "😲",
    "☹",
    "🙁",
    "😖",
    "😞",
    "😟",
    "😤",
    "😢",
    "😭",
    "😦",
    "😧",
    "😨",
    "😩",
    "😬",
    "😰",
    "😱",
    "😳",
    "😵",
    "😡",
    "😠",
    "😇",
    "🤠",
    "🤡",
    "🤥",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤧",
    "😈",
    "👿",
    "👹",
    "👺",
    "💀",
    "☠",
    "👻",
    "👽",
    "👾",
    "🤖",
    "💩",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
    "🙈",
    "🙉",
    "🙊",
    "👦",
    "👦🏻",
    "👦🏼",
    "👦🏽",
    "👦🏾",
    "👦🏿",
    "👧",
    "👧🏻",
    "👧🏼",
    "👧🏽",
    "👧🏾",
    "👧🏿",
    "👨",
    "👨🏻",
    "👨🏼",
    "👨🏽",
    "👨🏾",
    "👨🏿",
    "👩",
    "👩🏻",
    "👩🏼",
    "👩🏽",
    "👩🏾",
    "👩🏿",
    "👴",
    "👴🏻",
    "👴🏼",
    "👴🏽",
    "👴🏾",
    "👴🏿",
    "👵",
    "👵🏻",
    "👵🏼",
    "👵🏽",
    "👵🏾",
    "👵🏿",
    "👶",
    "👶🏻",
    "👶🏼",
    "👶🏽",
    "👶🏾",
    "👶🏿",
    "👼",
    "👼🏻",
    "👼🏼",
    "👼🏽",
    "👼🏾",
    "👼🏿",
    "👮",
    "👮🏻",
    "👮🏼",
    "👮🏽",
    "👮🏾",
    "👮🏿",
    "🕵",
    "🕵🏻",
    "🕵🏼",
    "🕵🏽",
    "🕵🏾",
    "🕵🏿",
    "💂",
    "💂🏻",
    "💂🏼",
    "💂🏽",
    "💂🏾",
    "💂🏿",
    "👷",
    "👷🏻",
    "👷🏼",
    "👷🏽",
    "👷🏾",
    "👷🏿",
    "👳",
    "👳🏻",
    "👳🏼",
    "👳🏽",
    "👳🏾",
    "👳🏿",
    "👱",
    "👱🏻",
    "👱🏼",
    "👱🏽",
    "👱🏾",
    "👱🏿",
    "🎅",
    "🎅🏻",
    "🎅🏼",
    "🎅🏽",
    "🎅🏾",
    "🎅🏿",
    "🤶",
    "🤶🏻",
    "🤶🏼",
    "🤶🏽",
    "🤶🏾",
    "🤶🏿",
    "👸",
    "👸🏻",
    "👸🏼",
    "👸🏽",
    "👸🏾",
    "👸🏿",
    "🤴",
    "🤴🏻",
    "🤴🏼",
    "🤴🏽",
    "🤴🏾",
    "🤴🏿",
    "👰",
    "👰🏻",
    "👰🏼",
    "👰🏽",
    "👰🏾",
    "👰🏿",
    "🤵",
    "🤵🏻",
    "🤵🏼",
    "🤵🏽",
    "🤵🏾",
    "🤵🏿",
    "🤰",
    "🤰🏻",
    "🤰🏼",
    "🤰🏽",
    "🤰🏾",
    "🤰🏿",
    "👲",
    "👲🏻",
    "👲🏼",
    "👲🏽",
    "👲🏾",
    "👲🏿",
    "🙍",
    "🙍🏻",
    "🙍🏼",
    "🙍🏽",
    "🙍🏾",
    "🙍🏿",
    "🙎",
    "🙎🏻",
    "🙎🏼",
    "🙎🏽",
    "🙎🏾",
    "🙎🏿",
    "🙅",
    "🙅🏻",
    "🙅🏼",
    "🙅🏽",
    "🙅🏾",
    "🙅🏿",
    "🙆",
    "🙆🏻",
    "🙆🏼",
    "🙆🏽",
    "🙆🏾",
    "🙆🏿",
    "💁",
    "💁🏻",
    "💁🏼",
    "💁🏽",
    "💁🏾",
    "💁🏿",
    "🙋",
    "🙋🏻",
    "🙋🏼",
    "🙋🏽",
    "🙋🏾",
    "🙋🏿",
    "🙇",
    "🙇🏻",
    "🙇🏼",
    "🙇🏽",
    "🙇🏾",
    "🙇🏿",
    "🤦",
    "🤦🏻",
    "🤦🏼",
    "🤦🏽",
    "🤦🏾",
    "🤦🏿",
    "🤷",
    "🤷🏻",
    "🤷🏼",
    "🤷🏽",
    "🤷🏾",
    "🤷🏿",
    "💆",
    "💆🏻",
    "💆🏼",
    "💆🏽",
    "💆🏾",
    "💆🏿",
    "💇",
    "💇🏻",
    "💇🏼",
    "💇🏽",
    "💇🏾",
    "💇🏿",
    "🚶",
    "🚶🏻",
    "🚶🏼",
    "🚶🏽",
    "🚶🏾",
    "🚶🏿",
    "🏃",
    "🏃🏻",
    "🏃🏼",
    "🏃🏽",
    "🏃🏾",
    "🏃🏿",
    "💃",
    "💃🏻",
    "💃🏼",
    "💃🏽",
    "💃🏾",
    "💃🏿",
    "🕺",
    "🕺🏻",
    "🕺🏼",
    "🕺🏽",
    "🕺🏾",
    "🕺🏿",
    "👯",
    "🕴",
    "🗣",
    "👤",
    "👥",
    "🤺",
    "🏇",
    "⛷",
    "🏂",
    "🏌",
    "🏄",
    "🏄🏻",
    "🏄🏼",
    "🏄🏽",
    "🏄🏾",
    "🏄🏿",
    "🚣",
    "🚣🏻",
    "🚣🏼",
    "🚣🏽",
    "🚣🏾",
    "🚣🏿",
    "🏊",
    "🏊🏻",
    "🏊🏼",
    "🏊🏽",
    "🏊🏾",
    "🏊🏿",
    "⛹",
    "⛹🏻",
    "⛹🏼",
    "⛹🏽",
    "⛹🏾",
    "⛹🏿",
    "🏋",
    "🏋🏻",
    "🏋🏼",
    "🏋🏽",
    "🏋🏾",
    "🏋🏿",
    "🚴",
    "🚴🏻",
    "🚴🏼",
    "🚴🏽",
    "🚴🏾",
    "🚴🏿",
    "🚵",
    "🚵🏻",
    "🚵🏼",
    "🚵🏽",
    "🚵🏾",
    "🚵🏿",
    "🏎",
    "🏍",
    "🤸",
    "🤸🏻",
    "🤸🏼",
    "🤸🏽",
    "🤸🏾",
    "🤸🏿",
    "🤼",
    "🤼🏻",
    "🤼🏼",
    "🤼🏽",
    "🤼🏾",
    "🤼🏿",
    "🤽",
    "🤽🏻",
    "🤽🏼",
    "🤽🏽",
    "🤽🏾",
    "🤽🏿",
    "🤾",
    "🤾🏻",
    "🤾🏼",
    "🤾🏽",
    "🤾🏾",
    "🤾🏿",
    "🤹",
    "🤹🏻",
    "🤹🏼",
    "🤹🏽",
    "🤹🏾",
    "🤹🏿",
    "👫",
    "👬",
    "👭",
    "💏",
    "👩‍❤️‍💋‍👨",
    "👨‍❤️‍💋‍👨",
    "👩‍❤️‍💋‍👩",
    "💑",
    "👩‍❤️‍👨",
    "👨‍❤️‍👨",
    "👩‍❤️‍👩",
    "👪",
    "👨‍👩‍👦",
    "👨‍👩‍👧",
    "👨‍👩‍👧‍👦",
    "👨‍👩‍👦‍👦",
    "👨‍👩‍👧‍👧",
    "👨‍👨‍👦",
    "👨‍👨‍👧",
    "👨‍👨‍👧‍👦",
    "👨‍👨‍👦‍👦",
    "👨‍👨‍👧‍👧",
    "👩‍👩‍👦",
    "👩‍👩‍👧",
    "👩‍👩‍👧‍👦",
    "👩‍👩‍👦‍👦",
    "👩‍👩‍👧‍👧",
    "🏻",
    "🏼",
    "🏽",
    "🏾",
    "🏿",
    "💪",
    "💪🏻",
    "💪🏼",
    "💪🏽",
    "💪🏾",
    "💪🏿",
    "🤳",
    "🤳🏻",
    "🤳🏼",
    "🤳🏽",
    "🤳🏾",
    "🤳🏿",
    "👈",
    "👈🏻",
    "👈🏼",
    "👈🏽",
    "👈🏾",
    "👈🏿",
    "👉",
    "👉🏻",
    "👉🏼",
    "👉🏽",
    "👉🏾",
    "👉🏿",
    "☝",
    "☝🏻",
    "☝🏼",
    "☝🏽",
    "☝🏾",
    "☝🏿",
    "👆",
    "👆🏻",
    "👆🏼",
    "👆🏽",
    "👆🏾",
    "👆🏿",
    "🖕",
    "🖕🏻",
    "🖕🏼",
    "🖕🏽",
    "🖕🏾",
    "🖕🏿",
    "👇",
    "👇🏻",
    "👇🏼",
    "👇🏽",
    "👇🏾",
    "👇🏿",
    "✌",
    "✌🏻",
    "✌🏼",
    "✌🏽",
    "✌🏾",
    "✌🏿",
    "🤞",
    "🤞🏻",
    "🤞🏼",
    "🤞🏽",
    "🤞🏾",
    "🤞🏿",
    "🖖",
    "🖖🏻",
    "🖖🏼",
    "🖖🏽",
    "🖖🏾",
    "🖖🏿",
    "🤘",
    "🤘🏻",
    "🤘🏼",
    "🤘🏽",
    "🤘🏾",
    "🤘🏿",
    "🤙",
    "🤙🏻",
    "🤙🏼",
    "🤙🏽",
    "🤙🏾",
    "🤙🏿",
    "🖐",
    "🖐🏻",
    "🖐🏼",
    "🖐🏽",
    "🖐🏾",
    "🖐🏿",
    "✋",
    "✋🏻",
    "✋🏼",
    "✋🏽",
    "✋🏾",
    "✋🏿",
    "👌",
    "👌🏻",
    "👌🏼",
    "👌🏽",
    "👌🏾",
    "👌🏿",
    "👍",
    "👍🏻",
    "👍🏼",
    "👍🏽",
    "👍🏾",
    "👍🏿",
    "👎",
    "👎🏻",
    "👎🏼",
    "👎🏽",
    "👎🏾",
    "👎🏿",
    "✊",
    "✊🏻",
    "✊🏼",
    "✊🏽",
    "✊🏾",
    "✊🏿",
    "👊",
    "👊🏻",
    "👊🏼",
    "👊🏽",
    "👊🏾",
    "👊🏿",
    "🤛",
    "🤛🏻",
    "🤛🏼",
    "🤛🏽",
    "🤛🏾",
    "🤛🏿",
    "🤜",
    "🤜🏻",
    "🤜🏼",
    "🤜🏽",
    "🤜🏾",
    "🤜🏿",
    "🤚",
    "🤚🏻",
    "🤚🏼",
    "🤚🏽",
    "🤚🏾",
    "🤚🏿",
    "👋",
    "👋🏻",
    "👋🏼",
    "👋🏽",
    "👋🏾",
    "👋🏿",
    "👏",
    "👏🏻",
    "👏🏼",
    "👏🏽",
    "👏🏾",
    "👏🏿",
    "✍",
    "✍🏻",
    "✍🏼",
    "✍🏽",
    "✍🏾",
    "✍🏿",
    "👐",
    "👐🏻",
    "👐🏼",
    "👐🏽",
    "👐🏾",
    "👐🏿",
    "🙌",
    "🙌🏻",
    "🙌🏼",
    "🙌🏽",
    "🙌🏾",
    "🙌🏿",
    "🙏",
    "🙏🏻",
    "🙏🏼",
    "🙏🏽",
    "🙏🏾",
    "🙏🏿",
    "🤝",
    "🤝🏻",
    "🤝🏼",
    "🤝🏽",
    "🤝🏾",
    "🤝🏿",
    "💅",
    "💅🏻",
    "💅🏼",
    "💅🏽",
    "💅🏾",
    "💅🏿",
    "👂",
    "👂🏻",
    "👂🏼",
    "👂🏽",
    "👂🏾",
    "👂🏿",
    "👃",
    "👃🏻",
    "👃🏼",
    "👃🏽",
    "👃🏾",
    "👃🏿",
    "👣",
    "👀",
    "👁",
    "👁‍🗨",
    "👅",
    "👄",
    "💋",
    "💘",
    "❤",
    "💓",
    "💔",
    "💕",
    "💖",
    "💗",
    "💙",
    "💚",
    "💛",
    "💜",
    "🖤",
    "💝",
    "💞",
    "💟",
    "❣",
    "💌",
    "💤",
    "💢",
    "💣",
    "💥",
    "💦",
    "💨",
    "💫",
    "💬",
    "🗨",
    "🗯",
    "💭",
    "🕳",
    "👓",
    "🕶",
    "👔",
    "👕",
    "👖",
    "👗",
    "👘",
    "👙",
    "👚",
    "👛",
    "👜",
    "👝",
    "🛍",
    "🎒",
    "👞",
    "👟",
    "👠",
    "👡",
    "👢",
    "👑",
    "👒",
    "🎩",
    "🎓",
    "⛑",
    "📿",
    "💄",
    "💍",
    "💎",
    "🐵",
    "🐒",
    "🦍",
    "🐶",
    "🐕",
    "🐩",
    "🐺",
    "🦊",
    "🐱",
    "🐈",
    "🦁",
    "🐯",
    "🐅",
    "🐆",
    "🐴",
    "🐎",
    "🦌",
    "🦄",
    "🐮",
    "🐂",
    "🐃",
    "🐄",
    "🐷",
    "🐖",
    "🐗",
    "🐽",
    "🐏",
    "🐑",
    "🐐",
    "🐪",
    "🐫",
    "🐘",
    "🦏",
    "🐭",
    "🐁",
    "🐀",
    "🐹",
    "🐰",
    "🐇",
    "🐿",
    "🦇",
    "🐻",
    "🐨",
    "🐼",
    "🐾",
    "🦃",
    "🐔",
    "🐓",
    "🐣",
    "🐤",
    "🐥",
    "🐦",
    "🐧",
    "🕊",
    "🦅",
    "🦆",
    "🦉",
    "🐸",
    "🐊",
    "🐢",
    "🦎",
    "🐍",
    "🐲",
    "🐉",
    "🐳",
    "🐋",
    "🐬",
    "🐟",
    "🐠",
    "🐡",
    "🦈",
    "🐙",
    "🐚",
    "🦀",
    "🦐",
    "🦑",
    "🦋",
    "🐌",
    "🐛",
    "🐜",
    "🐝",
    "🐞",
    "🕷",
    "🕸",
    "🦂",
    "💐",
    "🌸",
    "💮",
    "🏵",
    "🌹",
    "🥀",
    "🌺",
    "🌻",
    "🌼",
    "🌷",
    "🌱",
    "🌲",
    "🌳",
    "🌴",
    "🌵",
    "🌾",
    "🌿",
    "☘",
    "🍀",
    "🍁",
    "🍂",
    "🍃",
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🥝",
    "🍅",
    "🥑",
    "🍆",
    "🥔",
    "🥕",
    "🌽",
    "🌶",
    "🥒",
    "🍄",
    "🥜",
    "🌰",
    "🍞",
    "🥐",
    "🥖",
    "🥞",
    "🧀",
    "🍖",
    "🍗",
    "🥓",
    "🍔",
    "🍟",
    "🍕",
    "🌭",
    "🌮",
    "🌯",
    "🥙",
    "🥚",
    "🍳",
    "🥘",
    "🍲",
    "🥗",
    "🍿",
    "🍱",
    "🍘",
    "🍙",
    "🍚",
    "🍛",
    "🍜",
    "🍝",
    "🍠",
    "🍢",
    "🍣",
    "🍤",
    "🍥",
    "🍡",
    "🍦",
    "🍧",
    "🍨",
    "🍩",
    "🍪",
    "🎂",
    "🍰",
    "🍫",
    "🍬",
    "🍭",
    "🍮",
    "🍯",
    "🍼",
    "🥛",
    "☕",
    "🍵",
    "🍶",
    "🍾",
    "🍷",
    "🍸",
    "🍹",
    "🍺",
    "🍻",
    "🥂",
    "🥃",
    "🍽",
    "🍴",
    "🥄",
    "🔪",
    "🏺",
    "🌍",
    "🌎",
    "🌏",
    "🌐",
    "🗺",
    "🗾",
    "🏔",
    "⛰",
    "🌋",
    "🗻",
    "🏕",
    "🏖",
    "🏜",
    "🏝",
    "🏞",
    "🏟",
    "🏛",
    "🏗",
    "🏘",
    "🏙",
    "🏚",
    "🏠",
    "🏡",
    "🏢",
    "🏣",
    "🏤",
    "🏥",
    "🏦",
    "🏨",
    "🏩",
    "🏪",
    "🏫",
    "🏬",
    "🏭",
    "🏯",
    "🏰",
    "💒",
    "🗼",
    "🗽",
    "⛪",
    "🕌",
    "🕍",
    "⛩",
    "🕋",
    "⛲",
    "⛺",
    "🌁",
    "🌃",
    "🌄",
    "🌅",
    "🌆",
    "🌇",
    "🌉",
    "♨",
    "🌌",
    "🎠",
    "🎡",
    "🎢",
    "💈",
    "🎪",
    "🎭",
    "🖼",
    "🎨",
    "🎰",
    "🚂",
    "🚃",
    "🚄",
    "🚅",
    "🚆",
    "🚇",
    "🚈",
    "🚉",
    "🚊",
    "🚝",
    "🚞",
    "🚋",
    "🚌",
    "🚍",
    "🚎",
    "🚐",
    "🚑",
    "🚒",
    "🚓",
    "🚔",
    "🚕",
    "🚖",
    "🚗",
    "🚘",
    "🚙",
    "🚚",
    "🚛",
    "🚜",
    "🚲",
    "🛴",
    "🛵",
    "🚏",
    "🛣",
    "🛤",
    "⛽",
    "🚨",
    "🚥",
    "🚦",
    "🚧",
    "🛑",
    "⚓",
    "⛵",
    "🛶",
    "🚤",
    "🛳",
    "⛴",
    "🛥",
    "🚢",
    "✈",
    "🛩",
    "🛫",
    "🛬",
    "💺",
    "🚁",
    "🚟",
    "🚠",
    "🚡",
    "🚀",
    "🛰",
    "🛎",
    "🚪",
    "🛌",
    "🛏",
    "🛋",
    "🚽",
    "🚿",
    "🛀",
    "🛀🏻",
    "🛀🏼",
    "🛀🏽",
    "🛀🏾",
    "🛀🏿",
    "🛁",
    "⌛",
    "⏳",
    "⌚",
    "⏰",
    "⏱",
    "⏲",
    "🕰",
    "🕛",
    "🕧",
    "🕐",
    "🕜",
    "🕑",
    "🕝",
    "🕒",
    "🕞",
    "🕓",
    "🕟",
    "🕔",
    "🕠",
    "🕕",
    "🕡",
    "🕖",
    "🕢",
    "🕗",
    "🕣",
    "🕘",
    "🕤",
    "🕙",
    "🕥",
    "🕚",
    "🕦",
    "🌑",
    "🌒",
    "🌓",
    "🌔",
    "🌕",
    "🌖",
    "🌗",
    "🌘",
    "🌙",
    "🌚",
    "🌛",
    "🌜",
    "🌡",
    "☀",
    "🌝",
    "🌞",
    "⭐",
    "🌟",
    "🌠",
    "☁",
    "⛅",
    "⛈",
    "🌤",
    "🌥",
    "🌦",
    "🌧",
    "🌨",
    "🌩",
    "🌪",
    "🌫",
    "🌬",
    "🌀",
    "🌈",
    "🌂",
    "☂",
    "☔",
    "⛱",
    "⚡",
    "❄",
    "☃",
    "⛄",
    "☄",
    "🔥",
    "💧",
    "🌊",
    "🎃",
    "🎄",
    "🎆",
    "🎇",
    "✨",
    "🎈",
    "🎉",
    "🎊",
    "🎋",
    "🎍",
    "🎎",
    "🎏",
    "🎐",
    "🎑",
    "🎀",
    "🎁",
    "🎗",
    "🎟",
    "🎫",
    "🎖",
    "🏆",
    "🏅",
    "🥇",
    "🥈",
    "🥉",
    "⚽",
    "⚾",
    "🏀",
    "🏐",
    "🏈",
    "🏉",
    "🎾",
    "🎱",
    "🎳",
    "🏏",
    "🏑",
    "🏒",
    "🏓",
    "🏸",
    "🥊",
    "🥋",
    "🥅",
    "🎯",
    "⛳",
    "⛸",
    "🎣",
    "🎽",
    "🎿",
    "🎮",
    "🕹",
    "🎲",
    "♠",
    "♥",
    "♦",
    "♣",
    "🃏",
    "🀄",
    "🎴",
    "🔇",
    "🔈",
    "🔉",
    "🔊",
    "📢",
    "📣",
    "📯",
    "🔔",
    "🔕",
    "🎼",
    "🎵",
    "🎶",
    "🎙",
    "🎚",
    "🎛",
    "🎤",
    "🎧",
    "📻",
    "🎷",
    "🎸",
    "🎹",
    "🎺",
    "🎻",
    "🥁",
    "📱",
    "📲",
    "☎",
    "📞",
    "📟",
    "📠",
    "🔋",
    "🔌",
    "💻",
    "🖥",
    "🖨",
    "⌨",
    "🖱",
    "🖲",
    "💽",
    "💾",
    "💿",
    "📀",
    "🎥",
    "🎞",
    "📽",
    "🎬",
    "📺",
    "📷",
    "📸",
    "📹",
    "📼",
    "🔍",
    "🔎",
    "🔬",
    "🔭",
    "📡",
    "🕯",
    "💡",
    "🔦",
    "🏮",
    "📔",
    "📕",
    "📖",
    "📗",
    "📘",
    "📙",
    "📚",
    "📓",
    "📒",
    "📃",
    "📜",
    "📄",
    "📰",
    "🗞",
    "📑",
    "🔖",
    "🏷",
    "💰",
    "💴",
    "💵",
    "💶",
    "💷",
    "💸",
    "💳",
    "💹",
    "💱",
    "💲",
    "✉",
    "📧",
    "📨",
    "📩",
    "📤",
    "📥",
    "📦",
    "📫",
    "📪",
    "📬",
    "📭",
    "📮",
    "🗳",
    "✏",
    "✒",
    "🖋",
    "🖊",
    "🖌",
    "🖍",
    "📝",
    "💼",
    "📁",
    "📂",
    "🗂",
    "📅",
    "📆",
    "🗒",
    "🗓",
    "📇",
    "📈",
    "📉",
    "📊",
    "📋",
    "📌",
    "📍",
    "📎",
    "🖇",
    "📏",
    "📐",
    "✂",
    "🗃",
    "🗄",
    "🗑",
    "🔒",
    "🔓",
    "🔏",
    "🔐",
    "🔑",
    "🗝",
    "🔨",
    "⛏",
    "⚒",
    "🛠",
    "🗡",
    "⚔",
    "🔫",
    "🏹",
    "🛡",
    "🔧",
    "🔩",
    "⚙",
    "🗜",
    "⚗",
    "⚖",
    "🔗",
    "⛓",
    "💉",
    "💊",
    "🚬",
    "⚰",
    "⚱",
    "🗿",
    "🛢",
    "🔮",
    "🛒",
    "🏧",
    "🚮",
    "🚰",
    "♿",
    "🚹",
    "🚺",
    "🚻",
    "🚼",
    "🚾",
    "🛂",
    "🛃",
    "🛄",
    "🛅",
    "⚠",
    "🚸",
    "⛔",
    "🚫",
    "🚳",
    "🚭",
    "🚯",
    "🚱",
    "🚷",
    "📵",
    "🔞",
    "☢",
    "☣",
    "⬆",
    "↗",
    "➡",
    "↘",
    "⬇",
    "↙",
    "⬅",
    "↖",
    "↕",
    "↔",
    "↩",
    "↪",
    "⤴",
    "⤵",
    "🔃",
    "🔄",
    "🔙",
    "🔚",
    "🔛",
    "🔜",
    "🔝",
    "🛐",
    "🕉",
    "🕎",
    "⛎",
    "🔀",
    "🔁",
    "🔂",
    "⏩",
    "⏭",
    "⏯",
    "⏪",
    "⏮",
    "🔼",
    "⏫",
    "🔽",
    "⏬",
    "⏸",
    "⏹",
    "⏺",
    "⏏",
    "🎦",
    "🔅",
    "🔆",
    "📶",
    "📳",
    "📴",
    "♻",
    "📛",
    "⚜",
    "🔰",
    "🔱",
    "⭕",
    "✅",
    "☑",
    "✔",
    "✖",
    "❌",
    "❎",
    "➕",
    "➖",
    "➗",
    "➰",
    "➿",
    "〽",
    "✳",
    "✴",
    "❇",
    "‼",
    "⁉",
    "❓",
    "❔",
    "❕",
    "❗",
    "〰",
    "©",
    "®",
    "™",
    "#️⃣",
    "*️⃣",
    "0️⃣",
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "🔟",
    "💯",
    "🔠",
    "🔡",
    "🔢",
    "🔣",
    "🔤",
    "🅰",
    "🆎",
    "🅱",
    "🆑",
    "🆒",
    "🆓",
    "ℹ",
    "🆔",
    "Ⓜ",
    "🆕",
    "🆖",
    "🅾",
    "🆗",
    "🅿",
    "🆘",
    "🆙",
    "🆚",
    "🈁",
    "🈂",
    "🈷",
    "🈶",
    "🈯",
    "🉐",
    "🈹",
    "🈚",
    "🈲",
    "🉑",
    "🈸",
    "🈴",
    "🈳",
    "㊗",
    "㊙",
    "🈺",
    "🈵",
    "▪",
    "▫",
    "◻",
    "◼",
    "◽",
    "◾",
    "⬛",
    "⬜",
    "🔶",
    "🔷",
    "🔸",
    "🔹",
    "🔺",
    "🔻",
    "💠",
    "🔘",
    "🔲",
    "🔳",
    "⚪",
    "⚫",
    "🔴",
    "🔵",
    "🏁",
    "🚩",
    "🎌",
    "🏴",
    "🏳",
    "🇦🇨",
    "🇦🇩",
    "🇦🇪",
    "🇦🇫",
    "🇦🇬",
    "🇦🇮",
    "🇦🇱",
    "🇦🇲",
    "🇦🇴",
    "🇦🇶",
    "🇦🇷",
    "🇦🇸",
    "🇦🇹",
    "🇦🇺",
    "🇦🇼",
    "🇦🇽",
    "🇦🇿",
    "🇧🇦",
    "🇧🇧",
    "🇧🇩",
    "🇧🇪",
    "🇧🇫",
    "🇧🇬",
    "🇧🇭",
    "🇧🇮",
    "🇧🇯",
    "🇧🇱",
    "🇧🇲",
    "🇧🇳",
    "🇧🇴",
    "🇧🇶",
    "🇧🇷",
    "🇧🇸",
    "🇧🇹",
    "🇧🇻",
    "🇧🇼",
    "🇧🇾",
    "🇧🇿",
    "🇨🇦",
    "🇨🇨",
    "🇨🇩",
    "🇨🇫",
    "🇨🇬",
    "🇨🇭",
    "🇨🇮",
    "🇨🇰",
    "🇨🇱",
    "🇨🇲",
    "🇨🇳",
    "🇨🇴",
    "🇨🇵",
    "🇨🇷",
    "🇨🇺",
    "🇨🇻",
    "🇨🇼",
    "🇨🇽",
    "🇨🇾",
    "🇨🇿",
    "🇩🇪",
    "🇩🇬",
    "🇩🇯",
    "🇩🇰",
    "🇩🇲",
    "🇩🇴",
    "🇩🇿",
    "🇪🇦",
    "🇪🇨",
    "🇪🇪",
    "🇪🇬",
    "🇪🇭",
    "🇪🇷",
    "🇪🇸",
    "🇪🇹",
    "🇪🇺",
    "🇫🇮",
    "🇫🇯",
    "🇫🇰",
    "🇫🇲",
    "🇫🇴",
    "🇫🇷",
    "🇬🇦",
    "🇬🇧",
    "🇬🇩",
    "🇬🇪",
    "🇬🇫",
    "🇬🇬",
    "🇬🇭",
    "🇬🇮",
    "🇬🇱",
    "🇬🇲",
    "🇬🇳",
    "🇬🇵",
    "🇬🇶",
    "🇬🇷",
    "🇬🇸",
    "🇬🇹",
    "🇬🇺",
    "🇬🇼",
    "🇬🇾",
    "🇭🇰",
    "🇭🇲",
    "🇭🇳",
    "🇭🇷",
    "🇭🇹",
    "🇭🇺",
    "🇮🇨",
    "🇮🇩",
    "🇮🇪",
    "🇮🇱",
    "🇮🇲",
    "🇮🇳",
    "🇮🇴",
    "🇮🇶",
    "🇮🇷",
    "🇮🇸",
    "🇮🇹",
    "🇯🇪",
    "🇯🇲",
    "🇯🇴",
    "🇯🇵",
    "🇰🇪",
    "🇰🇬",
    "🇰🇭",
    "🇰🇮",
    "🇰🇲",
    "🇰🇳",
    "🇰🇵",
    "🇰🇷",
    "🇰🇼",
    "🇰🇾",
    "🇰🇿",
    "🇱🇦",
    "🇱🇧",
    "🇱🇨",
    "🇱🇮",
    "🇱🇰",
    "🇱🇷",
    "🇱🇸",
    "🇱🇹",
    "🇱🇺",
    "🇱🇻",
    "🇱🇾",
    "🇲🇦",
    "🇲🇨",
    "🇲🇩",
    "🇲🇪",
    "🇲🇫",
    "🇲🇬",
    "🇲🇭",
    "🇲🇰",
    "🇲🇱",
    "🇲🇲",
    "🇲🇳",
    "🇲🇴",
    "🇲🇵",
    "🇲🇶",
    "🇲🇷",
    "🇲🇸",
    "🇲🇹",
    "🇲🇺",
    "🇲🇻",
    "🇲🇼",
    "🇲🇽",
    "🇲🇾",
    "🇲🇿",
    "🇳🇦",
    "🇳🇨",
    "🇳🇪",
    "🇳🇫",
    "🇳🇬",
    "🇳🇮",
    "🇳🇱",
    "🇳🇴",
    "🇳🇵",
    "🇳🇷",
    "🇳🇺",
    "🇳🇿",
    "🇴🇲",
    "🇵🇦",
    "🇵🇪",
    "🇵🇫",
    "🇵🇬",
    "🇵🇭",
    "🇵🇰",
    "🇵🇱",
    "🇵🇲",
    "🇵🇳",
    "🇵🇷",
    "🇵🇸",
    "🇵🇹",
    "🇵🇼",
    "🇵🇾",
    "🇶🇦",
    "🇷🇪",
    "🇷🇴",
    "🇷🇸",
    "🇷🇺",
    "🇷🇼",
    "🇸🇦",
    "🇸🇧",
    "🇸🇨",
    "🇸🇩",
    "🇸🇪",
    "🇸🇬",
    "🇸🇭",
    "🇸🇮",
    "🇸🇯",
    "🇸🇰",
    "🇸🇱",
    "🇸🇲",
    "🇸🇳",
    "🇸🇴",
    "🇸🇷",
    "🇸🇸",
    "🇸🇹",
    "🇸🇻",
    "🇸🇽",
    "🇸🇾",
    "🇸🇿",
    "🇹🇦",
    "🇹🇨",
    "🇹🇩",
    "🇹🇫",
    "🇹🇬",
    "🇹🇭",
    "🇹🇯",
    "🇹🇰",
    "🇹🇱",
    "🇹🇲",
    "🇹🇳",
    "🇹🇴",
    "🇹🇷",
    "🇹🇹",
    "🇹🇻",
    "🇹🇼",
    "🇹🇿",
    "🇺🇦",
    "🇺🇬",
    "🇺🇲",
    "🇺🇸",
    "🇺🇾",
    "🇺🇿",
    "🇻🇦",
    "🇻🇨",
    "🇻🇪",
    "🇻🇬",
    "🇻🇮",
    "🇻🇳",
    "🇻🇺",
    "🇼🇫",
    "🇼🇸",
    "🇽🇰",
    "🇾🇪",
    "🇾🇹",
    "🇿🇦",
    "🇿🇲",
    "🇿🇼",
  ];

  function hashToEmoji(hash) {
    let k = 0;
    let out = "";
    for (let i = 0; i < hash.length; i++) {
      if (k + hash.charCodeAt(i) < emoji.length / 2) {
        k += hash.charCodeAt(i);
      } else {
        out += emoji[k];
        k = 0;
      }
    }
    if (k > 0) {
      out += emoji[k];
    }
    return out;
  }

  const textElements = document.querySelectorAll('span,a');
  for (let i = 0; i < textElements.length; i++) {
      if (textElements[i].innerHTML.indexOf('0x') === 0) {
        textElements[i].innerHTML = hashToEmoji(textElements[i].innerHTML);
      }
  }
})();
