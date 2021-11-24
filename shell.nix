{ pkgs ? import <nixpkgs> {} }:

with pkgs;

let
  node2nix-packages = import ./node2nix-deps { inherit (pkgs) nodejs; };
in
mkShell {
  buildInputs = [
    nodejs
    nodePackages.node2nix
    node2nix-packages.typescript-language-server
    node2nix-packages.create-react-app
  ];
}
