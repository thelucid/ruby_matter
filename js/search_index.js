var search_data = {"index":{"searchIndex":["rubymatter","engineerror","parser","stringifier","content()","data()","directive()","empty()","empty?()","excerpt()","language()","matter()","matter?()","message()","new()","new()","new()","parse()","read()","stringify()","stringify()","stringify()","test()","readme"],"longSearchIndex":["rubymatter","rubymatter::engineerror","rubymatter::parser","rubymatter::stringifier","rubymatter::parser#content()","rubymatter::parser#data()","rubymatter::parser#directive()","rubymatter::parser#empty()","rubymatter::parser#empty?()","rubymatter::parser#excerpt()","rubymatter::language()","rubymatter::parser#matter()","rubymatter::parser#matter?()","rubymatter::engineerror#message()","rubymatter::engineerror::new()","rubymatter::parser::new()","rubymatter::stringifier::new()","rubymatter::parse()","rubymatter::read()","rubymatter::stringify()","rubymatter::parser#stringify()","rubymatter::stringifier#stringify()","rubymatter::test()",""],"info":[["RubyMatter","","classes/RubyMatter.html","","<p>Provides the interface for reading, parsing and stringifying front matter.\n"],["RubyMatter::EngineError","","classes/RubyMatter/EngineError.html","","<p>Raised when an engine doesn&#39;t exist for a language.\n"],["RubyMatter::Parser","","classes/RubyMatter/Parser.html","","<p>Parses the supplied <code>original</code> on demand, when the relevant methods are called.\n"],["RubyMatter::Stringifier","","classes/RubyMatter/Stringifier.html","","<p>Stringifies <code>data</code>, <code>content</code> and optional <code>excerpt</code>, based on the arguments supplied to the initializer.\n"],["content","RubyMatter::Parser","classes/RubyMatter/Parser.html#method-i-content","()","<p>Extracts the content from the front matter.\n<p>Returns\n<p>(String) &mdash; The content found in the source.\n"],["data","RubyMatter::Parser","classes/RubyMatter/Parser.html#method-i-data","()","<p>Extracts the data from the front matter.\n<p>Returns\n<p>(Hash) &mdash; The data found in the front matter.\n"],["directive","RubyMatter::Parser","classes/RubyMatter/Parser.html#method-i-directive","()","<p>The language extracted from the front matter.\n<p>Returns\n<p>(String) &mdash; The raw directive string within the front …\n"],["empty","RubyMatter::Parser","classes/RubyMatter/Parser.html#method-i-empty","()","<p>When the front matter is empty (either all whitespace, nothing at all, or just comments and no data), …\n"],["empty?","RubyMatter::Parser","classes/RubyMatter/Parser.html#method-i-empty-3F","()","<p>Whether the front matter is empty.\n<p>Returns\n<p>(Boolean) &mdash; Evaluates to <code>true</code> if front matter is empty.\n"],["excerpt","RubyMatter::Parser","classes/RubyMatter/Parser.html#method-i-excerpt","()","<p>If enabled, extracts the excerpt after front matter.\n<p>Returns\n<p>(String|nil) &mdash; The excerpt, or <code>nil</code>.\n"],["language","RubyMatter","classes/RubyMatter.html#method-c-language","(source, delimiters: DELIMITERS)","<p>Parameters\n<p>source (String) &mdash; A string to extract front matter language from.\n<p>delimiters (Array|String) &mdash; Opening …\n"],["matter","RubyMatter::Parser","classes/RubyMatter/Parser.html#method-i-matter","()","<p>Extracts the raw front matter block.\n<p>Returns\n<p>(String) &mdash; The raw front matter found in the source.\n"],["matter?","RubyMatter::Parser","classes/RubyMatter/Parser.html#method-i-matter-3F","()","<p>Whether the source has front matter.\n<p>Returns\n<p>(Boolean) &mdash; Evaluates to <code>true</code> if front matter is present.\n"],["message","RubyMatter::EngineError","classes/RubyMatter/EngineError.html#method-i-message","()",""],["new","RubyMatter::EngineError","classes/RubyMatter/EngineError.html#method-c-new","(message = nil, language:)",""],["new","RubyMatter::Parser","classes/RubyMatter/Parser.html#method-c-new","( source, delimiters:, language: nil, aliases: {}, engines: {}, excerpt: nil, excerpt_separator: nil )","<p>Instantiate the parser. This should not need to be called directly, as the RubyMatter module methods …\n"],["new","RubyMatter::Stringifier","classes/RubyMatter/Stringifier.html#method-c-new","( content, data, delimiters:, language: nil, engines: {}, excerpt: nil, excerpt_separator: nil )","<p>Instantiate the stringifier. This should not need to be called directly, as the RubyMatter module methods …\n"],["parse","RubyMatter","classes/RubyMatter.html#method-c-parse","( source, delimiters: DELIMITERS, language: LANGUAGE, aliases: ALIASES, engines: ENGINES, excerpt: nil, excerpt_separator: nil )","<p>Parameters\n<p>Returns a parser instance that extracts <code>content</code>, <code>data</code>, <code>excerpt</code> and the raw <code>matter</code>. If the matter …\n"],["read","RubyMatter","classes/RubyMatter.html#method-c-read","(filepath, **options)","<p>Parameters\n<p>filepath (String) &mdash; Path to a file containing front matter, for parsing.\n<p>**options &mdash; All options …\n"],["stringify","RubyMatter","classes/RubyMatter.html#method-c-stringify","( content, data = {}, delimiters: DELIMITERS, language: LANGUAGE, engines: ENGINES, excerpt: nil, excerpt_separator: nil )","<p>Parameters\n<p>content (String) &mdash; The content string that follows the front matter.\n<p>data (Hash) &mdash; The data that …\n"],["stringify","RubyMatter::Parser","classes/RubyMatter/Parser.html#method-i-stringify","()","<p>Stringifies using the supplied <code>delimiters</code>, <code>language</code>, <code>engines</code> and optional <code>excerpt</code>. By default, only  …\n"],["stringify","RubyMatter::Stringifier","classes/RubyMatter/Stringifier.html#method-i-stringify","()","<p>Stringifies <code>content</code>, <code>data</code>, and optional <code>excerpt</code>, using the <code>delimiters</code>, <code>language</code> and <code>engines</code>.\n<p>Returns\n<p>( … &mdash; "],["test","RubyMatter","classes/RubyMatter.html#method-c-test","(source, delimiters: DELIMITERS)","<p>Parameters\n<p>source (String) &mdash; A string to test for front matter.\n<p>delimiters (Array|String) &mdash; Opening and closing …\n"],["README","","files/README_md.html","","<p>RubyMatter\n<p>Smarter YAML front matter parser for Ruby. Parse front matter from a string or file. Fast, …\n"]]}}