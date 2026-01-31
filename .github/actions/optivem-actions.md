# Optivem Actions Reference

The workflows reference several custom actions from `optivem/*`. 
For this demo, we'll create simplified versions.

These actions would normally:
- `find-latest-docker-images-action`: Find latest Docker image digests
- `should-run-acceptance-stage-action`: Determine if tests should run
- `publish-docker-image-action`: Build and publish Docker images
- `generate-prerelease-version-action`: Create version numbers
- `tag-docker-images-action`: Tag images with versions
- `create-release-action`: Create GitHub releases
- `summarize-commit-stage-action`: Create workflow summaries
- And more...

For now, we'll use Docker CLI commands directly in workflows.
