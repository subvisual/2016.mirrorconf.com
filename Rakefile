require "middleman-gh-pages"

require "rubocop/rake_task"
require "scss_lint"
require "scss_lint/rake_task"

task default: %w(lint:all)

namespace :lint do
  desc "Run all linters"
  task all: [:rubocop, :scss_lint, :eslint]

  RuboCop::RakeTask.new

  SCSSLint::RakeTask.new do |t|
    t.config = ".scss-lint.yml"
  end

  desc "Run code style linter"
  task :eslint do
    puts "Running eslint"
    success = system "./node_modules/.bin/eslint --ext js --ext jsx frontend/"
    exit 1 unless success
  end
end
