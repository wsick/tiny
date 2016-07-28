namespace tiny.key {
    var keyFromKeyCode: Key[] = [];
    keyFromKeyCode[8] = Key.back;
    keyFromKeyCode[9] = Key.tab;
    keyFromKeyCode[13] = Key.enter;
    keyFromKeyCode[16] = Key.shift;
    keyFromKeyCode[17] = Key.ctrl;
    keyFromKeyCode[18] = Key.alt;
    //keyFromKeyCode[19] = Key.Pause/Break;
    keyFromKeyCode[20] = Key.capsLock;
    keyFromKeyCode[27] = Key.escape;
    keyFromKeyCode[32] = Key.space;
    keyFromKeyCode[33] = Key.pageUp;
    keyFromKeyCode[34] = Key.pageDown;
    keyFromKeyCode[35] = Key.end;
    keyFromKeyCode[36] = Key.home;
    keyFromKeyCode[37] = Key.left;
    keyFromKeyCode[38] = Key.up;
    keyFromKeyCode[39] = Key.right;
    keyFromKeyCode[40] = Key.down;
    keyFromKeyCode[45] = Key.insert;
    keyFromKeyCode[46] = Key.delete;
    keyFromKeyCode[48] = Key.d0;
    keyFromKeyCode[49] = Key.d1;
    keyFromKeyCode[50] = Key.d2;
    keyFromKeyCode[51] = Key.d3;
    keyFromKeyCode[52] = Key.d4;
    keyFromKeyCode[53] = Key.d5;
    keyFromKeyCode[54] = Key.d6;
    keyFromKeyCode[55] = Key.d7;
    keyFromKeyCode[56] = Key.d8;
    keyFromKeyCode[57] = Key.d9;
    //keyFromKeyCode[59] = Key.semicolon/colon;
    //keyFromKeyCode[61] = Key.equals/plus;
    keyFromKeyCode[65] = Key.a;
    keyFromKeyCode[66] = Key.b;
    keyFromKeyCode[67] = Key.c;
    keyFromKeyCode[68] = Key.d;
    keyFromKeyCode[69] = Key.e;
    keyFromKeyCode[70] = Key.f;
    keyFromKeyCode[71] = Key.g;
    keyFromKeyCode[72] = Key.h;
    keyFromKeyCode[73] = Key.i;
    keyFromKeyCode[74] = Key.j;
    keyFromKeyCode[75] = Key.k;
    keyFromKeyCode[76] = Key.l;
    keyFromKeyCode[77] = Key.m;
    keyFromKeyCode[78] = Key.n;
    keyFromKeyCode[79] = Key.o;
    keyFromKeyCode[80] = Key.p;
    keyFromKeyCode[81] = Key.q;
    keyFromKeyCode[82] = Key.r;
    keyFromKeyCode[83] = Key.s;
    keyFromKeyCode[84] = Key.t;
    keyFromKeyCode[85] = Key.u;
    keyFromKeyCode[86] = Key.v;
    keyFromKeyCode[87] = Key.w;
    keyFromKeyCode[88] = Key.x;
    keyFromKeyCode[89] = Key.y;
    keyFromKeyCode[90] = Key.z;
    //keyFromKeyCode[91] = Key.window;
    keyFromKeyCode[96] = Key.numPad0;
    keyFromKeyCode[97] = Key.numPad1;
    keyFromKeyCode[98] = Key.numPad2;
    keyFromKeyCode[99] = Key.numPad3;
    keyFromKeyCode[100] = Key.numPad4;
    keyFromKeyCode[101] = Key.numPad5;
    keyFromKeyCode[102] = Key.numPad6;
    keyFromKeyCode[103] = Key.numPad7;
    keyFromKeyCode[104] = Key.numPad8;
    keyFromKeyCode[105] = Key.numPad9;
    keyFromKeyCode[106] = Key.multiply;
    keyFromKeyCode[107] = Key.add;
    keyFromKeyCode[109] = Key.subtract;
    keyFromKeyCode[110] = Key.decimal;
    keyFromKeyCode[111] = Key.divide;
    keyFromKeyCode[112] = Key.f1;
    keyFromKeyCode[113] = Key.f2;
    keyFromKeyCode[114] = Key.f3;
    keyFromKeyCode[115] = Key.f4;
    keyFromKeyCode[116] = Key.f5;
    keyFromKeyCode[117] = Key.f6;
    keyFromKeyCode[118] = Key.f7;
    keyFromKeyCode[119] = Key.f8;
    keyFromKeyCode[120] = Key.f9;
    keyFromKeyCode[121] = Key.f10;
    keyFromKeyCode[122] = Key.f11;
    keyFromKeyCode[123] = Key.f12;

    export function keyFromBrowserCode(code: number): Key {
        return keyFromKeyCode[code];
    }
}