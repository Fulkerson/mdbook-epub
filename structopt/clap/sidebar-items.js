initSidebarItems({"macro":[["_clap_count_exprs","Counts the number of comma-delimited expressions passed to it.  The result is a compile-time evaluable expression, suitable for use as a static array size, or the value of a `const`."],["app_from_crate","Allows you to build the `App` instance from your Cargo.toml at compile time."],["arg_enum","Convenience macro to generate more complete enums with variants to be used as a type when parsing arguments. This enum also provides a `variants()` function which can be used to retrieve a `Vec<&'static str>` of the variant names, as well as implementing [`FromStr`] and [`Display`] automatically."],["clap_app","Build `App`, `Arg`s, `SubCommand`s and `Group`s with Usage-string like input but without the associated parsing runtime cost."],["crate_authors","Allows you to pull the authors for the app from your Cargo.toml at compile time in the form: `\"author1 lastname <author1@example.com>:author2 lastname <author2@example.com>\"`"],["crate_description","Allows you to pull the description from your Cargo.toml at compile time."],["crate_name","Allows you to pull the name from your Cargo.toml at compile time."],["crate_version","Allows you to pull the version from your Cargo.toml at compile time as `MAJOR.MINOR.PATCH_PKGVERSION_PRE`"],["value_t","Convenience macro getting a typed value `T` where `T` implements [`std::str::FromStr`] from an argument value. This macro returns a `Result<T,String>` which allows you as the developer to decide what you'd like to do on a failed parse. There are two types of errors, parse failures and those where the argument wasn't present (such as a non-required argument). You can use it to get a single value, or a iterator as with the [`ArgMatches::values_of`]"],["value_t_or_exit","Convenience macro getting a typed value `T` where `T` implements [`std::str::FromStr`] or exiting upon error, instead of returning a [`Result`] type."],["values_t","Convenience macro getting a typed value [`Vec<T>`] where `T` implements [`std::str::FromStr`] This macro returns a [`clap::Result<Vec<T>>`] which allows you as the developer to decide what you'd like to do on a failed parse."],["values_t_or_exit","Convenience macro getting a typed value [`Vec<T>`] where `T` implements [`std::str::FromStr`] or exiting upon error."]]});