FROM ruby:3.1

WORKDIR /site

# Install bundler
RUN gem install bundler:2.3.12

# Copy Gemfile first for better caching
COPY src/Gemfile src/Gemfile.lock ./

# Install dependencies
RUN bundle install

# Copy the rest of the site
COPY src/ ./

# Expose Jekyll server port
EXPOSE 4000

# Default command
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
