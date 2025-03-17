<img width="100%" src"docs/screen.png">

# miniDEL
**Minidel pseudo-language compiler** (lexer/parser/semantic analyzer) built with Lex, Bison, and C on Linux (compiled via GCC/Flex/Bison), paired with a Django-based web editor featuring syntax highlighting and error diagnostics through a custom JavaScript library. 
The compiler performs lexical, syntactic, and semantic analysis, generating a **symbol table** (tracking variables, types, and scopes) and **quadruples** (intermediate code representations), which are displayed in real-time within the UI alongside a console showing compilation logs and errors. 
The repository excludes the compiler’s source code, providing only precompiled Linux binaries, while the web interface dynamically visualizes the symbol table, quadruple sequences, and compiler output through integrated panels.
