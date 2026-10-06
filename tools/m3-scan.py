import sys, io
from pptx import Presentation
from pptx.util import Emu
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
tot = {}
for f in ['l1', 'l2', 'l3', 'l45']:
    p = Presentation(f'src/m3/{f}.pptx')
    out = []
    n = 0; imgs = 0; textless = 0; words = 0; shapes_only = 0
    for i, s in enumerate(p.slides, 1):
        txt = []; im = 0; other = 0
        def walk(shapes):
            global_im = 0
            for sh in shapes:
                if sh.shape_type == 6:  # group
                    walk(sh.shapes)
                    continue
                if sh.shape_type == 13: nonlocal_inc('im')
                elif sh.has_text_frame and sh.text_frame.text.strip():
                    txt.append(sh.text_frame.text.strip().replace('\n', ' / '))
                elif sh.shape_type in (1, 5, 9): nonlocal_inc('other')
                if getattr(sh, 'has_table', False) and sh.has_table:
                    for r in sh.table.rows:
                        txt.append(' | '.join(c.text for c in r.cells))
        cnt = {'im': 0, 'other': 0}
        def nonlocal_inc(k): cnt[k] += 1
        walk(s.shapes)
        t = ' // '.join(txt)
        w = len(t.split())
        n += 1; imgs += cnt['im']; words += w
        if w < 5: textless += 1
        out.append(f'--- slide {i} [img {cnt["im"]}, shapes {cnt["other"]}, words {w}]\n{t}\n')
    open(f'src/m3/{f}.txt', 'w', encoding='utf-8').write('\n'.join(out))
    print(f'{f}: {n} slides, {imgs} pictures, {words} words, {textless} slides with almost no text')
