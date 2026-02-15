function encodeImagePath(type, name) {
    if (!name) return null;
    const folderMap = {
        'boss': 'boss',
        'character': 'characters',
        'weapon': 'weapons'
    };
    const folder = folderMap[type];
    const cleanName = name.trim().replace(/\s+/g, '');
    // URLエンコード処理を削除
    return `/${folder}/${cleanName}.png`;
}