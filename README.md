Regtable
========

Configuration management server of the whole kernel system.

This is a server, provides general data of options that other parts of this
system should know and exchange. Such options are not time-critical, but
are global and may be in details, and may be changed by the user.

This server listens on a UNIX socket, as such feature provided by NodeJS.

The writing and reading a certain option may sometimes later be controlled
by a authorization mechanism.
